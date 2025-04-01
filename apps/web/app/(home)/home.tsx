'use client';

import { usePageAuth } from '@/shared/hooks/use-page-auth';

import { HomePrivate } from './(private)';
import { HomePublic } from './(public)';

export const Home = () => {
  const { token } = usePageAuth();

  if (token) {
    return <HomePrivate />;
  }

  return <HomePublic />;
};
