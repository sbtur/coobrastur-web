'use client';
import { HomePrivate } from './(private)';
import { HomePublic } from './(public)';
import { usePageAuth } from './page-auth';

export default function Page() {
  const { token } = usePageAuth();

  if (token) {
    return <HomePrivate />;
  }

  return <HomePublic />;
}
