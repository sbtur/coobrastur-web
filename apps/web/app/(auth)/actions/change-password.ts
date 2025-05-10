'use server';

import { ChangePasswordParams } from '@core/authentication/authentication.interface';
import { makeAuthenticationUseCases } from '@core/authentication/make-authentication-use-cases';

export async function changePassword({
  token,
  password,
}: ChangePasswordParams) {
  try {
    await makeAuthenticationUseCases().changePasswordUseCase.exec({
      token,
      password,
    });

    return {
      success: true,
      message: 'Senha alterada com sucesso',
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Ocorreu um erro ao realizar a alteração de senha',
    };
  }
}
