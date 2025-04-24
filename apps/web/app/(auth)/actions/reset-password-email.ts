'use server';

import { PasswordResetParams } from '@core/authentication/authentication.interface';
import { makeLoginUseCases } from '@core/authentication/make-login-use-cases';

export async function resetPasswordWithEmail({
  document,
  recoveryType,
}: PasswordResetParams) {
  try {
    const response = await makeLoginUseCases().passwordResetUseCase.exec({
      document,
      recoveryType,
    });

    return {
      success: true,
      message: `Email de recuperação enviado com sucesso para ${response.email}`,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Ocorreu um erro ao realizar a recuperação de senha',
    };
  }
}
