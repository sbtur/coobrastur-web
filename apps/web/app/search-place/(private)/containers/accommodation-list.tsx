'use client';
import { useEffect, useState } from 'react';

import { makeAccommodationsUseCase } from '@/@core/accommodations/make-accommodations.use-cases';
import { AccommodationListDetailedUseCaseResponse } from '@/@core/accommodations/use-cases/accommodation-list-detailed.use-case';

import { AccommodationCard } from '../components/accommodation-card';

export const AccommodationList = () => {
  const [defaultAccommodation, setDefaultAccommodation] = useState<
    AccommodationListDetailedUseCaseResponse[]
  >([]);

  useEffect(() => {
    const fetchAccommodationList = async () => {
      const accommodationList =
        await makeAccommodationsUseCase().accommodationListDetailedUseCase.exec();

      setDefaultAccommodation(accommodationList);
    };

    fetchAccommodationList();
  }, []);

  return (
    <div className="flex-1 md:px-4 grid gap-x-4 gap-y-10">
      {defaultAccommodation?.map(accommodation => (
        <AccommodationCard
          accommodation={accommodation}
          key={accommodation.id}
        />
      ))}
    </div>
  );
};
