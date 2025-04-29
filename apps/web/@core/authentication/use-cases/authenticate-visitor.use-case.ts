import {
  ApiAuthenticateVisitorParams,
  IAuthentication,
} from '../authentication.interface';
import {
  BadRequestError,
  InternalServerError,
  InvalidCredentialsError,
} from '../errors/auth-errors';

import { ApiError } from '@core/types/api-error';

export interface AuthenticateVisitor {
  token: string;
}

export function authenticateVisitorUseCase(service: IAuthentication) {
  return {
    async exec({
      accessKey,
      password,
    }: ApiAuthenticateVisitorParams): Promise<string> {
      try {
        const { token } = await service.authenticateVisitor({
          accessKey,
          password,
        });

        return token;
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
