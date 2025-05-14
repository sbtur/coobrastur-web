import { Metadata } from 'next';

import { Content } from '@coobrastur/ui/components/layouts/content';

import { Footer } from '@/shared/components/footer';
import { HeaderPrivate } from '@/shared/components/header';
import { SearchAvailiability } from '@/shared/components/search-availiability/search-availiability';
import { UserMobileNavigation } from '@/shared/components/user-mobile-navigation';

import { Filters } from './components/filters/filters';
import { AccommodationList } from './containers/accommodation-list';

export const metadata: Metadata = {
  title: 'Hoteis',
  description: 'Busque pelos melhores hotéis do Brasil',
};

export async function SearchPlacePrivate() {
  return (
    <>
      <HeaderPrivate />
      <SearchAvailiability />
      <main className="max-w-full flex flex-col h-full pb-8 lg:pb-14">
        <Content className="lg:flex lg:justify-between gap-8 lg:py-0 mt-0 px-4">
          <Filters />
          <AccommodationList />
        </Content>
      </main>
      <Footer />
      <UserMobileNavigation />
    </>
  );
}
