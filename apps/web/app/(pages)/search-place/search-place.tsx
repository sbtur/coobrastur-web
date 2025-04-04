import { AccommodationList } from './containers/accommodation-list';
import { Search } from './containers/search';
import { SearchFilters } from './containers/search-filters';

import { Separator } from '@ui/components/data-display/separator';

export const SearchPlace = () => {
  return (
    <>
      <Search />
      <Separator />
      <SearchFilters />
      <AccommodationList />
    </>
  );
};
