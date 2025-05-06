'use server';
import { cookies } from 'next/headers';

import { auth } from '@/auth';
import { SESSION_VISITOR_USER } from '@/shared/utils/data/cookies-names';

export async function getAuthTokenFromCookies() {
  const session = await auth();
  if (session) {
    const token = session?.user.accessToken;
    return token;
  }

  const cookieStore = await cookies();
  const visitorToken = cookieStore.get(SESSION_VISITOR_USER)?.value;
  return visitorToken;
}
