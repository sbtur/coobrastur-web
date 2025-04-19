'use client';

import { usePageAuth } from '@/shared/hooks/use-page-auth';
import { ACCOMMODATIONSDETAILS } from '@/shared/mocks/accommodations/accommodations-details';

import AccommodationPrivate from './(private)/accommodation-page-private';
import AccommodationPublic from './(public)/accommodation-page-public';

export default function Accommodation() {
  const { token } = usePageAuth();

  if (token) {
    return <AccommodationPrivate accommodation={ACCOMMODATIONSDETAILS[0]!} />;
  }

  return <AccommodationPublic accommodation={ACCOMMODATIONSDETAILS[0]!} />;
}
