import { auth } from '@/auth';

import { HomePrivate } from './(private)/home-private';
import { HomePublic } from './(public)/home-public';

export default async function HomePage() {
  const session = await auth();

  console.log('session', session);
  if (session) {
    return <HomePrivate />;
  }

  return <HomePublic />;
}
