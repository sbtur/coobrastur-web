'use server';

import { AuthError } from 'next-auth';

import { InvalidCredentialsError } from '@/@core/authentication/errors/auth-errors';
import { signIn } from '@/auth';

import { LoginParams } from '@core/authentication/authentication.interface';

export async function authenticate(formData: LoginParams) {
  try {
    const result = await signIn('credentials', {
      username: formData.username,
      password: formData.password,
      redirect: false,
    });

    return result;
  } catch (error) {
    if (error instanceof AuthError) {
      return new InvalidCredentialsError();
    }
    return { message: 'Ocorreu um erro ao fazer login' };
  }
}
