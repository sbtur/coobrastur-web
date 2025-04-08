'use client';

import { usePageAuth } from '@/shared/hooks/use-page-auth';

import AccommodationPrivate from './(private)/accommodation-private';
import AccommodationPublic from './(public)/accommodation-public';

export default function Accommodation() {
  const { token } = usePageAuth();

  if (token) {
    return <AccommodationPrivate />;
  }

  return <AccommodationPublic />;
}
