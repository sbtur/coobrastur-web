import { useState } from 'react';

import { makeAccommodationsUseCase } from '@core/accommodations/make-accommodations.use-cases';
import { AccommodationSearchAutoComplete } from '@core/accommodations/use-cases/search-accommodation.use-case';

export function useSearch() {
  const [searchPlaceResults, setSearchPlaceResults] = useState<
    AccommodationSearchAutoComplete[]
  >([]);

  const onChangeAutoCompleteSearch = async ({ query }: { query: string }) => {
    try {
      const accommodationsUseCase = makeAccommodationsUseCase();
      setSearchPlaceResults(
        await accommodationsUseCase.searchAutoCompleteUseCase.exec(query)
      );
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
