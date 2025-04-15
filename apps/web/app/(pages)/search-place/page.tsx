import { Suspense } from 'react';
import { Metadata } from 'next';

import { AccommodationList } from './containers/accommodation-list';
import { AccommodationListSkeleton } from './containers/accommodation-list/accommodation-skeleton';
import { Search } from './containers/search';
import { SearchFilters } from './containers/search-filters';
import {
  AccommodationListItem,
  getAccommodationsList,
  getAccommodationsStaticList,
} from './http/accommodation';
import { SearchProvider } from './providers/search-provider';

import { Separator } from '@ui/components/data-display/separator';

export const metadata: Metadata = {
  title: 'Hoteis - Coobrastur',
  description: 'Hoteis - Coobrastur',
};

export default async function SearchPlacePage({
  searchParams,
}: {
  searchParams: Promise<{ s: string }>;
}) {
  const { s } = await searchParams;

  let accommodationsList: AccommodationListItem[] = [];

  if (s) {
    accommodationsList = await getAccommodationsList({
      cityId: s,
    });
  } else {
    accommodationsList = await getAccommodationsStaticList();
  }

  return (
    <SearchProvider accommodationsListStatic={accommodationsList}>
      <Search />
      <Separator />
      <SearchFilters />
      <Suspense fallback={<AccommodationListSkeleton />}>
        <AccommodationList />
      </Suspense>
    </SearchProvider>
  );
}
