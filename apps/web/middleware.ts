import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { makeAuthenticationUseCases } from './@core/authentication/make-authentication-use-cases';
import { getAuthTokenFromCookies } from './infra/cookies';
import { SESSION_VISITOR_USER } from './shared/utils/data/cookies-names';

export default async function middleware() {
  let token = await getAuthTokenFromCookies();

  if (!token) {
    token = await makeAuthenticationUseCases().authenticateVisitorUseCase.exec({
      accessKey: process.env.CLIENT_ACCESS_KEY || '',
      password: process.env.CLIENT_ACCESS_PASSWORD || '',
    });

    const cookieStore = await cookies();
    cookieStore.set(SESSION_VISITOR_USER, token, {
      expires: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    });

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/ (API routes)
     * 2. /_next/ (Next.js internals)
     * 3. /fonts/ (inside public)
     * 4. /icons/ (inside public)
     * 5. all root files inside public (e.g. /favicon.ico)
     */
    '/((?!api|_next|fonts|icons|[\\w-]+\\.\\w+).*)',
  ],
};
