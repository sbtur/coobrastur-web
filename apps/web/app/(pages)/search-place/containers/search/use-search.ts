import { useRef, useState } from 'react';

import { pushUrlParams } from '@/shared/helpers/manage-url-params';

import {
  AutoCompleteSearchResponse,
  getAccommodationAutoCompleteSearch,
} from '../../http/accommodation';
import { useSearchAccommodation } from '../../providers/search-provider';

export function useSearch() {
  const [searchPlaceResults, setSearchPlaceResults] = useState<
    AutoCompleteSearchResponse[]
  >([]);
  const { getListOfAccommodations } = useSearchAccommodation();
  const selectedPlaceToSearchAccommodation = useRef<string>('');

  const onChangeAutoCompleteSearch = async (value: string) => {
    try {
      const response = await getAccommodationAutoCompleteSearch(value);
      setSearchPlaceResults(response);
    } catch (err: any) {
      console.error('Error on auto complete search', err);
      setSearchPlaceResults([]);
    }
  };

  const handleSubmitSearch = () => {
    getListOfAccommodations({
      accommodationId: selectedPlaceToSearchAccommodation.current,
    });

    pushUrlParams({
      key: 's',
      value: selectedPlaceToSearchAccommodation.current,
    });
  };

  return {
    onChangeAutoCompleteSearch,
    searchPlaceResults,
    handleSubmitSearch,
    selectedPlaceToSearchAccommodation,
  };
}
