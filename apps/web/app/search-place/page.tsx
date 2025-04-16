import { ErrorBoundary } from 'react-error-boundary';
import { Metadata } from 'next';

import { Separator } from '@coobrastur/ui/components/data-display/separator';

import { AccommodationList } from './containers/accommodation-list';
import { Search } from './containers/search';
import { SearchFilters } from './containers/search-filters';
import {
  AccommodationListItem,
  getAccommodationsList,
  getAccommodationsStaticList,
} from './http/accommodation';
import SearchPlaceLoading from './loading';
import { SearchProvider } from './providers/search-provider';

export const metadata: Metadata = {
  title: 'Hoteis',
  description: 'Busque pelos melhores hotéis do Brasil',
};

export default async function SearchPlacePage({
  searchParams,
}: {
  searchParams: Promise<{ s: string }>;
}) {
  const { s: cityId } = await searchParams;

  let accommodationsList: AccommodationListItem[] = [];

  if (cityId) {
    accommodationsList = await getAccommodationsList({
      cityId,
    });
  } else {
    accommodationsList = await getAccommodationsStaticList();
  }

  return (
    <>
      <main className="flex-1">
        <SearchProvider accommodationsList={accommodationsList}>
          <Search />
          <Separator />
          <SearchFilters />
          <ErrorBoundary fallback={<div>Quebrou</div>}>
            <AccommodationList />
          </ErrorBoundary>
        </SearchProvider>
      </main>
      <SearchPlaceLoading />
    </>
  );
}
