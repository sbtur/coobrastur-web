'use client';

import { AccommodationCard } from '../components/accommodation-card';
import { useAccommodationList } from './use-accommodation-list';

export const AccommodationList = () => {
  const { accommodations } = useAccommodationList();

  return (
    <div className="flex-1 md:px-4 grid gap-x-4 gap-y-10">
      {accommodations?.map(accommodation => (
        <AccommodationCard
          accommodation={accommodation}
          key={accommodation.id}
        />
      ))}
    </div>
  );
};
