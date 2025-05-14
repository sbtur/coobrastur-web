import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { makeAccommodationsUseCase } from '@core/accommodations/make-accommodations.use-cases';
import { AccommodationListDetailedUseCaseResponse } from '@core/accommodations/use-cases/accommodation-list-detailed.use-case';

export const useAccommodationList = () => {
  const [accommodations, setAccommodations] = useState<
    AccommodationListDetailedUseCaseResponse[]
  >([]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const entries = Object.fromEntries(searchParams.entries());

    console.log('Fetching accommodation list', entries);

    const fetchAccommodationList = async () => {
      const params = {
        code: Number(entries.code),
        startDate: entries.startDate ?? null,
        endDate: entries.endDate ?? null,
        roomQuantity: 1,
        adultsRoom1: 2,
        adultsRoom2: 0,
        adultsRoom3: 0,
        adultsRoom4: 0,
        childrenRoom1: 0,
        childrenRoom2: 0,
        childrenRoom3: 0,
        childrenRoom4: 0,
        childrenAges: '',
      };

      const accommodationList =
        await makeAccommodationsUseCase().accommodationListDetailedUseCase.exec(
          params
        );

      setAccommodations(accommodationList);
    };

    if (entries.code) {
      fetchAccommodationList();
    }
  }, [searchParams]);

  return { accommodations };
};
