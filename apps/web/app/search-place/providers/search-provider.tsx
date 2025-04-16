'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

import {
  AccommodationListItem,
  getAccommodationsList,
} from '../http/accommodation';

interface SearchContextData {
  accommodationList: AccommodationListItem[];
  setAccommodationList: (accommodationList: AccommodationListItem[]) => void;
  isAccommodationListLoading: boolean;
  getListOfAccommodations: ({
    accommodationId,
  }: {
    accommodationId: string;
  }) => Promise<void>;
}

const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [accommodationList, setAccommodationList] = useState<
    AccommodationListItem[]
  >([]);
  const [isAccommodationListLoading, setIsAccommodationListLoading] =
    useState(false);

  const getListOfAccommodations = async ({
    accommodationId,
  }: {
    accommodationId: string;
  }) => {
    try {
      setIsAccommodationListLoading(true);
      const accommodations = await getAccommodationsList({
        cityId: accommodationId,
      });
      setAccommodationList(accommodations);
    } catch (err) {
      console.error('Error on get accommodations', err);
      setAccommodationList([]);
    } finally {
      setIsAccommodationListLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        accommodationList,
        isAccommodationListLoading,
        getListOfAccommodations,
        setAccommodationList,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchAccommodation() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
}
