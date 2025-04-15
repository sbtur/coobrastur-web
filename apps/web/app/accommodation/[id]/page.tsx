import { Metadata } from 'next';

import { getAccommodationDetail } from '@/app/(pages)/search-place/http/accommodation';

import AccommodationPublic from '../(public)/accommodation-page-public';

export const metadata: Metadata = {
  title: 'Hotel',
  description: 'Accommodation',
};

export default async function AccommodationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const accommodation = await getAccommodationDetail({ hotelId: id });

  return <AccommodationPublic accommodation={accommodation} />;
}
