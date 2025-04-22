import { Metadata } from 'next';

import AccommodationPublic from '../(public)/accommodation-page-public';

import { makeAccommodationsUseCase } from '@core/accommodations/make-accommodations.use-cases';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const accommodation =
    await makeAccommodationsUseCase().accommodationDetailsUseCase.exec({
      hotelId: id,
    });

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
  const accommodation =
    await makeAccommodationsUseCase().accommodationDetailsUseCase.exec({
      hotelId: id,
    });

  return <AccommodationPublic accommodation={accommodation} />;
}
