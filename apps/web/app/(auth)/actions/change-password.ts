'use server';

import { ChangePasswordParams } from '@core/authentication/authentication.interface';
import { makeLoginUseCases } from '@core/authentication/make-login-use-cases';

export async function changePassword({
  token,
  password,
}: ChangePasswordParams) {
  try {
    await makeLoginUseCases().changePasswordUseCase.exec({
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
