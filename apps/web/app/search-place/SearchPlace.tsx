import { Header } from '@components/Header';

import { AccommodationList } from './containers/AccommodationList';
import { Search } from './containers/Search';
import { SearchFilters } from './containers/SearchFilters';

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
