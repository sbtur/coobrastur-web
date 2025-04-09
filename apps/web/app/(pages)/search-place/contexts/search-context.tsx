'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

import { Accommodation } from '@coobrastur/types-shared';

import { autoCompleteSearch, getAccommodations } from '../services';
import { AccommodationSearchItem } from '../types/accommodation-search-item.types';

interface SearchContextData {
  searchPlaceResults: AccommodationSearchItem[];
  accommodationList: Accommodation[];
  selectedPlaceToSearchAccommodation: string | null;
  handleAutoCompleteSearch: (value: string) => Promise<void>;
  handleGetAccommodations: () => Promise<void>;
  setSelectedPlaceToSearchAccommodation: (value: string | null) => void;
}

const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchPlaceResults, setSearchPlaceResults] = useState<
    AccommodationSearchItem[]
  >([]);
  const [accommodationList, setAccommodationList] = useState<Accommodation[]>(
    [],
  );
  const [
    selectedPlaceToSearchAccommodation,
    setSelectedPlaceToSearchAccommodation,
  ] = useState<string | null>(null);

  const handleAutoCompleteSearch = async (value: string) => {
    try {
      const response = await autoCompleteSearch(value);
      setSearchPlaceResults((response as any).data);
    } catch (err: any) {
      console.error('Error on auto complete search', err);
      setSearchPlaceResults([]);
    }
  };

  const handleGetAccommodations = async () => {
    try {
      const response = await getAccommodations(
        selectedPlaceToSearchAccommodation,
      );
      setAccommodationList((response as any).data);
    } catch (err: any) {
      console.error('Error on get accommodations', err);
      setAccommodationList([]);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchPlaceResults,
        accommodationList,
        selectedPlaceToSearchAccommodation,
        handleAutoCompleteSearch,
        handleGetAccommodations,
        setSelectedPlaceToSearchAccommodation,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
}
