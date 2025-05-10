import {
  ChangePasswordParams,
  IAuthentication,
} from '../authentication.interface';
import { BadRequestError, InternalServerError } from '../errors/auth-errors';

import { ApiError } from '@core/types/api-error';

export function changePasswordUseCase(service: IAuthentication) {
  return {
    async exec({ token, password }: ChangePasswordParams): Promise<void> {
      try {
        if (!token) {
          throw new BadRequestError('Token não informado');
        }

        await service.changePassword({
          token,
          password,
        });
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
