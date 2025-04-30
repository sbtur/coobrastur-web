import { Metadata } from 'next';

import { makeAccommodationsUseCase } from '@/@core/accommodations/make-accommodations.use-cases';
import { AccommodationSearchByCity } from '@/@core/accommodations/use-cases/list-item.use-case';
import { Footer } from '@/shared/components/footer';
import { HeaderPrivate } from '@/shared/components/header';
import { SearchAvailiability } from '@/shared/components/search-availiability/search-availiability';
import { UserMobileNavigation } from '@/shared/components/user-mobile-navigation';

import { ACCOMMODATIONS_LIST_ID } from '../(public)/helpers/accommodations-list-id';

export const metadata: Metadata = {
  title: 'Hoteis',
  description: 'Busque pelos melhores hotéis do Brasil',
};

export async function SearchPlacePrivate({
  searchParams,
}: {
  searchParams: Promise<{ s: string }>;
}) {
  return (
    <>
      {/* <HeaderPrivate /> */}
      <SearchAvailiability />
      <main className="flex-1"></main>
      <Footer />
      <UserMobileNavigation />
    </>
  );
}
