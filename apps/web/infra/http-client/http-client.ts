import ky from 'ky';

import { makeAuthenticationUseCases } from '@/@core/authentication/make-authentication-use-cases';

import { getAuthTokenFromCookies } from '../cookies';

export const httpClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL_COOB,
  retry: {
    limit: 0,
  },
  hooks: {
    beforeRequest: [
      async request => {
        let token = await getAuthTokenFromCookies();

        if (!token) {
          token =
            await makeAuthenticationUseCases().authenticateVisitorUseCase.exec({
              accessKey: process.env.CLIENT_ACCESS_KEY || '',
              password: process.env.CLIENT_ACCESS_PASSWORD || '',
            });
        }

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }

        return request;
      },
    ],
  },
});
