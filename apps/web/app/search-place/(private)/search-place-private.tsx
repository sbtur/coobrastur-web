import { Metadata } from 'next';

import { Container } from '@coobrastur/ui/components/layouts/container';
import { Content } from '@coobrastur/ui/components/layouts/content';

import { Footer } from '@/shared/components/footer';
import { HeaderPrivate } from '@/shared/components/header';
import { SearchAvailiability } from '@/shared/components/search-availiability/search-availiability';
import { UserMobileNavigation } from '@/shared/components/user-mobile-navigation';

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
      <Container as="main" className="flex flex-col h-full pt-0 pb-8 lg:pb-14">
        <Content className="flex px-4 lg:px-0">
          <aside className="w-[315px]">
            <div>
              <h1>Filtros</h1>
            </div>
          </aside>
          <AccommodationList />
        </Content>
      </Container>
      <Footer />
      <UserMobileNavigation />
    </>
  );
}
