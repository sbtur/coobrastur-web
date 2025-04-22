import { ErrorBoundary } from 'react-error-boundary';
import { Metadata } from 'next';

import { Separator } from '@coobrastur/ui/components/data-display/separator';

import { ACCOMMODATIONS_LIST_ID } from '@/app/search-place/helpers/accommodations-list-id';

import { AccommodationList } from './containers/accommodation-list';
import { Search } from './containers/search';
import { SearchFilters } from './containers/search-filters';
import SearchPlaceLoading from './loading';
import { SearchProvider } from './providers/search-provider';

import { AccommodationSearchByCity } from '@core/accommodations/accommodation.interface';
import { makeAccommodationsUseCase } from '@core/accommodations/make-accommodations.use-cases';

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

  let accommodationsList: AccommodationSearchByCity[] = [];

  const accommodationsUseCase = makeAccommodationsUseCase();

  if (cityId) {
    accommodationsList = await accommodationsUseCase.listItemUseCase.exec({
      cityId,
    });
  } else {
    accommodationsList =
      await accommodationsUseCase.accommodationStaticUseCase.exec({
        hotelIds: ACCOMMODATIONS_LIST_ID,
      });
  }

  return (
    <>
      <main className="flex-1">
        <SearchProvider accommodationsList={accommodationsList}>
          <Search />
          <Separator />
          <SearchFilters />
          <ErrorBoundary fallback={<div>Error boundary Quebrou</div>}>
            <AccommodationList />
          </ErrorBoundary>
        </SearchProvider>
      </main>
      <SearchPlaceLoading />
    </>
  );
}
