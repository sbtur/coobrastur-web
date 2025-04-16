'use client';
import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';

import { pushUrlParams } from '@/shared/helpers/manage-url-params';

import { AccommodationList } from '../containers/accommodation-list';
import {
  AccommodationListItem,
  AutoCompleteSearchResponse,
  getAccommodationsList,
} from '../http/accommodation';

interface SearchContextData {
  accommodationList: AccommodationListItem[];
  setAccommodationList: (accommodationList: AccommodationListItem[]) => void;
  isAccommodationListLoading: boolean;
  getListOfAccommodations: ({ cityId }: { cityId: string }) => Promise<void>;
  handleSubmitSearch: () => void;
  selectedSearchAccommodation: RefObject<AutoCompleteSearchResponse | null>;
}

const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({
  children,
  accommodationsList,
}: {
  children: ReactNode;
  accommodationsList: AccommodationListItem[];
}) {
  const [accommodationList, setAccommodationList] = useState<
    AccommodationListItem[]
  >(accommodationsList || []);
  const [isAccommodationListLoading, setIsAccommodationListLoading] =
    useState(false);
  const { push } = useRouter();

  const selectedSearchAccommodation = useRef<AutoCompleteSearchResponse>(null);

  const getListOfAccommodations = async ({ cityId }: { cityId: string }) => {
    setIsAccommodationListLoading(true);
    const accommodations = await getAccommodationsList({
      cityId,
    });

    setAccommodationList(accommodations);

    setIsAccommodationListLoading(false);
  };

  const handleListAccommodationsFromSearch = async () => {
    if (!selectedSearchAccommodation.current) return;

    getListOfAccommodations({
      cityId: selectedSearchAccommodation.current.id,
    });

    pushUrlParams({
      key: 's',
      value: selectedSearchAccommodation.current.id,
    });
  };

  const handleRedirectToHotelPageSearch = () => {
    if (!selectedSearchAccommodation.current) return;

    push(`/accommodation/${selectedSearchAccommodation.current.id}`);
  };

  const handleSubmitSearch = () => {
    if (selectedSearchAccommodation.current?.type === 'city') {
      handleListAccommodationsFromSearch();
    } else {
      handleRedirectToHotelPageSearch();
    }
  };

  return (
    <SearchContext.Provider
      value={{
        accommodationList,
        isAccommodationListLoading,
        getListOfAccommodations,
        setAccommodationList,
        handleSubmitSearch,
        selectedSearchAccommodation,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchProvider() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
}
