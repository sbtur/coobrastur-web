'use client';

import { Loader2 } from 'lucide-react';

import {
  Alert,
  AlertDescription,
} from '@coobrastur/ui/components/data-display/alert';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@coobrastur/ui/components/data-entry/form';

import { useNewPassword } from '../use-new-password';

import { Button } from '@ui/components/data-entry/button';
import { InputPassword } from '@ui/components/data-entry/input/input-password';

export default function NewPasswordForm() {
  const { form, handleChangePassword, isPending, feedbackMessage } =
    useNewPassword();

  return (
    <Form
      form={form}
      onSubmit={form.handleSubmit(handleChangePassword)}
      className="mt-8"
    >
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nova senha</FormLabel>
              <FormControl>
                <InputPassword
                  placeholder="Senha"
                  id="newPassword"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nova senha</FormLabel>
              <FormControl>
                <InputPassword
                  id="confirmPassword"
                  placeholder="Confirmar senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button type="submit" className="w-full mt-8" disabled={isPending}>
        {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
        Redefinir senha
      </Button>

      {feedbackMessage.message && (
        <Alert variant={feedbackMessage.success ? 'success' : 'danger'}>
          <AlertDescription>{feedbackMessage.message}</AlertDescription>
        </Alert>
      )}
    </Form>
  );
}
