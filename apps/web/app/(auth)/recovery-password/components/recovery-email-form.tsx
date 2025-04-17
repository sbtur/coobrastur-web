'use client';

import { useForm } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@coobrastur/ui/components/data-entry/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { recoveryPasswordEmailValidationSchema } from '@shared/helpers/validation';
import { cpfOrCnpjMask } from '@shared/utils/input-masks';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';

type RecoveryEmailFormData = z.infer<
  typeof recoveryPasswordEmailValidationSchema
>;

const RecoveryEmailForm = () => {
  const form = useForm<RecoveryEmailFormData>({
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
                <MaskedInput
                  mask={cpfOrCnpjMask}
                  placeholder="CPF/CNPJ"
                  {...field}
                  render={(ref, props) => (
                    <Input
                      ref={ref as React.Ref<HTMLInputElement>}
                      {...props}
                    />
                  )}
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
