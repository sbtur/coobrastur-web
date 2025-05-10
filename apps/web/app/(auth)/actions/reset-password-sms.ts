'use server';

import { PasswordResetParams } from '@core/authentication/authentication.interface';
import { makeAuthenticationUseCases } from '@core/authentication/make-authentication-use-cases';

export async function resetPasswordWithSMS({
  document,
  recoveryType,
}: PasswordResetParams) {
  try {
    await makeAuthenticationUseCases().passwordResetUseCase.exec({
      document,
      recoveryType,
    });

    return {
      success: true,
      message: 'Você receberá um SMS com link para redefinir sua senha',
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Ocorreu um erro ao realizar a recuperação de senha',
    };
  }
}
