import { Metadata } from 'next';

import { getAccommodationDetail } from '@/app/search-place/http/accommodation';

import AccommodationPublic from '../(public)/accommodation-page-public';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const accommodation = await getAccommodationDetail({ hotelId: id });

  return {
    title: accommodation.name,
    description: accommodation.description,
  };
}

export default async function AccommodationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const accommodation = await getAccommodationDetail({ hotelId: id });

  return <AccommodationPublic accommodation={accommodation} />;
}
