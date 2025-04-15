import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const { push } = useRouter();
  const selectedSearchAccommodation = useRef<AutoCompleteSearchResponse>(null);

  const onChangeAutoCompleteSearch = async (value: string) => {
    try {
      const response = await getAccommodationAutoCompleteSearch(value);
      setSearchPlaceResults(response);
    } catch (err) {
      console.error('Error on auto complete search', err);
      setSearchPlaceResults([]);
    }
  };

  const handleSearchAccommodations = async () => {
    if (!selectedSearchAccommodation.current) return;

    getListOfAccommodations({
      accommodationId: selectedSearchAccommodation.current.id,
    });

    pushUrlParams({
      key: 's',
      value: selectedSearchAccommodation.current.id,
    });
  };

  const handleOpenHotelFromSearch = () => {
    if (!selectedSearchAccommodation.current) return;

    push(`/accommodation/${selectedSearchAccommodation.current.id}`);
  };

  const handleSubmitSearch = () => {
    if (selectedSearchAccommodation.current?.type === 'city') {
      handleSearchAccommodations();
    } else {
      handleOpenHotelFromSearch();
    }
  };

  return {
    onChangeAutoCompleteSearch,
    searchPlaceResults,
    handleSubmitSearch,
    selectedSearchAccommodation,
  };
}
