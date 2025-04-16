import { useState } from 'react';

import {
  AutoCompleteSearchResponse,
  getAccommodationAutoCompleteSearch,
} from '../../http/accommodation';

export function useSearch() {
  const [searchPlaceResults, setSearchPlaceResults] = useState<
    AutoCompleteSearchResponse[]
  >([]);
  const onChangeAutoCompleteSearch = async (value: string) => {
    try {
      const response = await getAccommodationAutoCompleteSearch(value);
      setSearchPlaceResults(response);
    } catch (err) {
      console.error('Error on auto complete search', err);
      setSearchPlaceResults([]);
    }
  };

  return {
    onChangeAutoCompleteSearch,
    searchPlaceResults,
  };
}
