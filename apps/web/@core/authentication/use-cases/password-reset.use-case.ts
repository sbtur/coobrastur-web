import { extractNumbers } from '@/shared/helpers/extract-numbers';

import {
  IAuthentication,
  PasswordResetParams,
} from '../authentication.interface';
import { BadRequestError, InternalServerError } from '../errors/auth-errors';

import { ApiError } from '@core/types/api-error';

export interface PasswordReset {
  email: string;
}

export function passwordResetUseCase(service: IAuthentication) {
  return {
    async exec({
      document,
      recoveryType,
    }: PasswordResetParams): Promise<PasswordReset> {
      try {
        const documentWithoutMask = extractNumbers(document);

        const response = await service.passwordReset({
          document: documentWithoutMask,
          recoveryType,
        });

        return {
          email: response.email,
        };
      } catch (error) {
        const apiError = error as ApiError;

        if (!apiError.response) {
          throw new InternalServerError();
        }

        if (apiError.response.status === 400) {
          throw new BadRequestError(apiError.response.data?.message);
        }

        throw new Error(apiError.response.data?.message);
      }
    },
  };
}
