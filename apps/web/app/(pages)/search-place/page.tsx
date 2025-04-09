import { AccommodationList } from './containers/accommodation-list';
import { Search } from './containers/search';
import { SearchFilters } from './containers/search-filters';

import { Separator } from '@ui/components/data-display/separator';

export default async function SearchPlacePage() {
  return (
    <>
      <Search />
      <Separator />
      <SearchFilters />
      <AccommodationList accommodations={[]} />
    </>
  );
}
