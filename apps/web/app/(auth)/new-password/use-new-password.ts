import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';

import { FeedbackMessage } from '@/shared/types/request-feedback-message';

import { changePassword } from '../actions/change-password';
import { newPasswordValidationSchema } from '../schema/auth.schema';

import { zodResolver } from '@hookform/resolvers/zod';

export const useNewPassword = () => {
  const [isPending, startTransition] = useTransition();
  const [feedbackMessage, setFeedbackMessage] = useState<FeedbackMessage>({
    success: false,
    message: '',
  });
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
    resolver: zodResolver(newPasswordValidationSchema),
  });

  const handleChangePassword = async () => {
    startTransition(async () => {
      const { newPassword } = form.getValues();

      const response = await changePassword({
        token: token ?? '',
        password: newPassword,
      });

      if (response.success) {
        router.push('/success');
      }

      setFeedbackMessage({ ...response });
    });
  };
  return { form, handleChangePassword, isPending, feedbackMessage };
};
