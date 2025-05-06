import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { LoginParams } from '@/@core/authentication/authentication.interface';

import { authenticate } from '../actions/authenticate';
import { loginValidationSchema } from '../schema/auth.schema';

import { zodResolver } from '@hookform/resolvers/zod';

export const useLogin = () => {
  const [isPending, startTransition] = useTransition();
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(loginValidationSchema),
  });

  const formAction = async (values: LoginParams) => {
    startTransition(async () => {
      const response = await authenticate(values);

      if ('success' in response && response.success) {
        router.push('/');
      } else {
        setFeedbackMessage(response.message || 'Erro ao fazer login');
      }
    });
  };

  return { form, isPending, formAction, feedbackMessage };
};
