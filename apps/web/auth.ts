import NextAuth, { type NextAuthResult } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { makeAuthenticationUseCases } from '@core/authentication/make-authentication-use-cases';

declare module 'next-auth' {
  interface User {
    isActive: boolean;
    accessToken: string;
    user: string;
  }
}

const result = NextAuth({
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await makeAuthenticationUseCases().loginUseCase.exec({
            username: credentials.username as string,
            password: credentials.password as string,
          });

          if (!user) {
            return null;
          }

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});

export const handlers: NextAuthResult['handlers'] = result.handlers;
export const auth: NextAuthResult['auth'] = result.auth;
export const signIn: NextAuthResult['signIn'] = result.signIn;
export const signOut: NextAuthResult['signOut'] = result.signOut;
