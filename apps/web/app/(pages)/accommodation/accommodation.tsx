'use client';

import { usePageAuth } from '@/shared/hooks/use-page-auth';

import AccommodationPrivate from './(private)';
import AccommodationPublic from './(public)';

export default function Accommodation() {
  const { token } = usePageAuth();

  if (token) {
    return <AccommodationPrivate />;
  }

  return <AccommodationPublic />;
}
