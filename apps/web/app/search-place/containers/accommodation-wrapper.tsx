'use client';
import { Suspense, useEffect } from 'react';

import { AccommodationListItem } from '../http/accommodation';
import { useSearchAccommodation } from '../providers/search-provider';
import { AccommodationList } from './accommodation-list';
import { AccommodationListSkeleton } from './accommodation-list/accommodation-skeleton';

export function AccommodationWrapper({
  accommodationsList,
}: {
  accommodationsList: AccommodationListItem[];
}) {
  const { setAccommodationList } = useSearchAccommodation();

  useEffect(() => {
    setAccommodationList(accommodationsList);
  }, [accommodationsList, setAccommodationList]);

  return (
    <Suspense fallback={<AccommodationListSkeleton />}>
      <AccommodationList />
    </Suspense>
  );
}
