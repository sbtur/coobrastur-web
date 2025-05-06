'use server';

import { AuthError } from 'next-auth';

import { InvalidCredentialsError } from '@/@core/authentication/errors/auth-errors';
import { signIn } from '@/auth';

import { LoginParams } from '@core/authentication/authentication.interface';

export async function authenticate(
  formData: LoginParams
): Promise<{ success: boolean; message: string } | InvalidCredentialsError> {
  try {
    await signIn('credentials', {
      username: formData.username,
      password: formData.password,
      redirect: false,
    });

    return { success: true, message: 'Login realizado com sucesso' };
  } catch (error) {
    console.error('Error on authenticate action', error);
    if (error instanceof AuthError) {
      return new InvalidCredentialsError();
    }

    return { success: false, message: 'Ocorreu um erro ao fazer login' };
  }
}
