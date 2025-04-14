'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

import {
  AccommodationListItem,
  getAccommodationsList,
} from '../http/accommodation';

interface SearchContextData {
  accommodationList: AccommodationListItem[];
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

  const getListOfAccommodations = async ({
    accommodationId,
  }: {
    accommodationId: string;
  }) => {
    try {
      const accommodations = await getAccommodationsList({
        cityId: accommodationId,
      });
      setAccommodationList(accommodations);
    } catch (err) {
      console.error('Error on get accommodations', err);
      setAccommodationList([]);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        accommodationList,
        getListOfAccommodations,
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
