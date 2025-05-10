'use client';

import { Loader2 } from 'lucide-react';
import { withMask } from 'use-mask-input';

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

import { useRecoveryPassword } from '../use-recorevy-password';

import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';

const RecoveryEmailForm = () => {
  const { form, isPending, feedbackMessage, handleResetPasswordWithEmail } =
    useRecoveryPassword();

  return (
    <Form
      form={form}
      onSubmit={form.handleSubmit(handleResetPasswordWithEmail)}
      className="mt-8"
    >
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="document"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Insira seu CPF ou CNPJ</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="CPF/CNPJ"
                  id="document"
                  ref={withMask(['999.999.999-99', '999.999.999/9999-99'])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button type="submit" className="w-full mt-8" disabled={isPending}>
        {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
        Redefinir senha por email
      </Button>

      {feedbackMessage.message && (
        <Alert
          variant={feedbackMessage.success ? 'success' : 'danger'}
          className="mt-4"
        >
          <AlertDescription>{feedbackMessage.message}</AlertDescription>
        </Alert>
      )}
    </Form>
  );
};

export default RecoveryEmailForm;
