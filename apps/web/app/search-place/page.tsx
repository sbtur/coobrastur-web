import { Metadata } from 'next';

import { AccommodationWrapper } from './containers/accommodation-wrapper';
import {
  AccommodationListItem,
  getAccommodationsList,
  getAccommodationsStaticList,
} from './http/accommodation';

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

  let accommodationsList: AccommodationListItem[] = [];

  if (cityId) {
    accommodationsList = await getAccommodationsList({
      cityId,
    });
  } else {
    accommodationsList = await getAccommodationsStaticList();
  }

  return <AccommodationWrapper accommodationsList={accommodationsList} />;
}
