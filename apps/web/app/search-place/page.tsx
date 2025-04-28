import { ErrorBoundary } from 'react-error-boundary';
import { Metadata } from 'next';

import { Separator } from '@coobrastur/ui/components/data-display/separator';

import { ACCOMMODATIONS_LIST_ID } from '@/app/search-place/helpers/accommodations-list-id';

import { AccommodationList } from './containers/accommodation-list';
import { Search } from './containers/search';
import { SearchFilters } from './containers/search-filters';
import { SearchProvider } from './providers/search-provider';

import { makeAccommodationsUseCase } from '@core/accommodations/make-accommodations.use-cases';
import { AccommodationSearchByCity } from '@core/accommodations/use-cases/list-item.use-case';

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

  if (cityId) {
    accommodationsList = await makeAccommodationsUseCase().listItemUseCase.exec(
      {
        cityId,
      },
    );
  } else {
    accommodationsList =
      await makeAccommodationsUseCase().accommodationStaticUseCase.exec({
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
    </>
  );
}
