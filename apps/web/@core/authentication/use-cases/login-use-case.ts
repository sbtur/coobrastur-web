import { jwtDecode } from 'jwt-decode';

import { extractNumbers } from '@/shared/helpers/extract-numbers';

import { IAuthentication, LoginParams } from '../authentication.interface';
import {
  BadRequestError,
  InternalServerError,
  InvalidCredentialsError,
} from '../errors/auth-errors';

import { ApiError } from '@core/types/api-error';

export interface Login {
  isActive: boolean;
  accessToken: string;
  user: string;
}
interface JwtPayload {
  unique_name: string;
  sessionType: string;
  searchId: string;
  nbf: number;
  iat: number;
}

export function loginUseCase(service: IAuthentication) {
  return {
    async exec({ username, password }: LoginParams): Promise<Login> {
      try {
        const usernameWithoutMask = extractNumbers(username);

        const response = await service.login({
          username: usernameWithoutMask,
          password,
        });

        const jwtPayload = jwtDecode<JwtPayload>(response.AccessToken);

        return {
          isActive: response.Situation,
          accessToken: response.AccessToken,
          user: jwtPayload.unique_name,
        };
      } catch (error) {
        const apiError = error as ApiError;

        if (!apiError.response) {
          throw new InternalServerError();
        }

        switch (apiError.response.status) {
          case 400:
            throw new BadRequestError(apiError.response.data?.message);
          case 401:
            throw new InvalidCredentialsError();
          default:
            throw new InternalServerError();
        }
      }
    },
  };
}
