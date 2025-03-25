import { Header } from '@components/header';

import { AccommodationList } from './containers/accommodation-list';
import { Search } from './containers/search';
import { SearchFilters } from './containers/search-filters';

import { Separator } from '@ui/components/separator';

export const SearchPlace = () => {
  return (
    <>
      <Header />
      <Search />
      <Separator />
      <SearchFilters />
      <AccommodationList />
    </>
  );
};
