import { auth } from '@/auth';

import { SearchPlacePrivate } from './(private)/search-place-private';
import { SearchPlacePublic } from './(public)/search-place-public';

export default async function SearchPlacePage({
  searchParams,
}: {
  searchParams: Promise<{ s: string }>;
}) {
  const session = await auth();

  if (session) {
    return <SearchPlacePrivate searchParams={searchParams} />;
  }

  return <SearchPlacePublic searchParams={searchParams} />;
}
