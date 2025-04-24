import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { resetPasswordWithEmail } from '../actions/reset-password-email';
import { resetPasswordWithSMS } from '../actions/reset-password-sms';
import { recoveryPasswordEmailValidationSchema } from '../schema/auth.schema';

import { zodResolver } from '@hookform/resolvers/zod';

interface FeedbackMessage {
  success: boolean;
  message: string;
}

export const useRecoveryPassword = () => {
  const [isPending, startTransition] = useTransition();
  const [feedbackMessage, setFeedbackMessage] = useState<FeedbackMessage>({
    success: false,
    message: '',
  });

  const form = useForm({
    defaultValues: {
      document: '',
    },
    resolver: zodResolver(recoveryPasswordEmailValidationSchema),
  });

  const handleResetPasswordWithEmail = async () => {
    const { document } = form.getValues();

    startTransition(async () => {
      const response = await resetPasswordWithEmail({
        document,
        recoveryType: 'email',
      });

      if ('message' in response) {
        setFeedbackMessage({
          success: response.success,
          message: response.message,
        });
        return;
      }
    });
  };

  const handleResetPasswordWithSMS = async () => {
    const { document } = form.getValues();

    startTransition(async () => {
      const response = await resetPasswordWithSMS({
        document,
        recoveryType: 'sms',
      });

      if ('message' in response) {
        setFeedbackMessage({
          success: response.success,
          message: response.message,
        });
        return;
      }
    });
  };

  return {
    form,
    handleResetPasswordWithEmail,
    handleResetPasswordWithSMS,
    isPending,
    feedbackMessage,
  };
};
