import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { makeLoginUseCases } from '@core/authentication/make-login-use-cases';

declare module 'next-auth' {
  interface User {
    isActive: boolean;
    accessToken: string;
    user: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
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
          const user = await makeLoginUseCases().loginUseCase.exec({
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
