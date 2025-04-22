'use client';

import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@coobrastur/ui/components/data-entry/form';

import { newPasswordValidationSchema } from '../../schema/auth.schema';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/components/data-entry/button';
import { InputPassword } from '@ui/components/data-entry/input/input-password';

export default function NewPasswordForm() {
  const form = useForm({
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
    resolver: zodResolver(newPasswordValidationSchema),
  });

  return (
    <Form
      form={form}
      onSubmit={form.handleSubmit(values => {
        console.log(values);
      })}
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
      <Button type="submit" className="w-full mt-8">
        Redefinir senha
      </Button>
    </Form>
  );
}
