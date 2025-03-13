import { Header } from '@components/Header';

import { HotelList } from './containers/HotelList';
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
      <HotelList />
    </>
  );
};
