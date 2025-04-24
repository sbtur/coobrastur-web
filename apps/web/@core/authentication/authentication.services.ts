import { jwtDecode } from 'jwt-decode';

import { httpClient } from '@/infra/http-client/http-client';

import {
  ApiLoginResult,
  ApiPasswordResetResult,
  IAuthentication,
  LoginParams,
  PasswordReset,
  PasswordResetParams,
} from './authentication.interface';

export function authenticationService(): IAuthentication {
  return {
    login: async ({
      username,
      password,
    }: LoginParams): Promise<ApiLoginResult> => {
      const response = await httpClient
        .post<ApiLoginResult>('Login/SignIn', {
          json: {
            userName: username,
            password,
          },
        })
        .json();

      return response;
    },
    passwordReset: async ({
      document,
      recoveryType,
    }: PasswordResetParams): Promise<ApiPasswordResetResult> => {
      const response = await httpClient
        .post<ApiPasswordResetResult>('Login/PasswordReset', {
          json: {
            cpf: document,
            recoveryForm: recoveryType,
          },
        })
        .json();

      return response;
    },
    changePassword: async () => {},
    userFirstAccess: async () => {},
  };
}
