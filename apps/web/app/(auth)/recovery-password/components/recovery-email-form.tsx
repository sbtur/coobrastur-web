'use client';

import { useForm } from 'react-hook-form';

import { withMask } from 'use-mask-input';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@coobrastur/ui/components/data-entry/form';

import { recoveryPasswordEmailValidationSchema } from '../../schema/auth.schema';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';

const RecoveryEmailForm = () => {
  const form = useForm({
    defaultValues: {
      document: '',
      email: '',
    },
    resolver: zodResolver(recoveryPasswordEmailValidationSchema),
  });

  return (
    <Form form={form} onSubmit={form.handleSubmit(() => null)} className="mt-8">
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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" id="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button type="submit" className="w-full mt-8">
        Redefinir senha por email
      </Button>
    </Form>
  );
};

export default RecoveryEmailForm;
