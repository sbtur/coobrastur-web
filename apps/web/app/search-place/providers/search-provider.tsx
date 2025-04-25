'use client';
import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';

import { makeAccommodationsUseCase } from '@/@core/accommodations/make-accommodations.use-cases';
import { AccommodationSearchAutoComplete } from '@/@core/accommodations/use-cases/search-accommodation.use-case';
import { pushUrlParams } from '@/shared/helpers/manage-url-params';

import { AccommodationSearchByCity } from '@core/accommodations/use-cases/list-item.use-case';

interface SearchContextData {
  accommodationList: AccommodationSearchByCity[];
  setAccommodationList: (
    accommodationList: AccommodationSearchByCity[],
  ) => void;
  isAccommodationListLoading: boolean;
  getListOfAccommodations: ({ cityId }: { cityId: string }) => Promise<void>;
  handleSubmitSearch: () => void;
  selectedSearchAccommodation: RefObject<AccommodationSearchAutoComplete | null>;
}

const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({
  children,
  accommodationsList,
}: {
  children: ReactNode;
  accommodationsList: AccommodationSearchByCity[];
}) {
  const [accommodationList, setAccommodationList] = useState<
    AccommodationSearchByCity[]
  >(accommodationsList || []);
  const [isAccommodationListLoading, setIsAccommodationListLoading] =
    useState(false);
  const { push } = useRouter();

  const selectedSearchAccommodation =
    useRef<AccommodationSearchAutoComplete | null>(null);

  const getListOfAccommodations = async ({ cityId }: { cityId: string }) => {
    try {
      setIsAccommodationListLoading(true);

      const accommodations =
        await makeAccommodationsUseCase().listItemUseCase.exec({
          cityId,
        });

      setIsAccommodationListLoading(false);
      setAccommodationList(accommodations);
    } catch (error) {
      console.error(error);
      setIsAccommodationListLoading(false);
      setAccommodationList([]);
    }
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
