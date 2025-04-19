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

import { recoveryPasswordSMSValidationSchema } from '../../schema/auth.schema';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';

const RecoverySMSForm = () => {
  const form = useForm({
    defaultValues: {
      phone: '',
      smsCode: '',
    },
    resolver: zodResolver(recoveryPasswordSMSValidationSchema),
  });

  return (
    <Form form={form} onSubmit={form.handleSubmit(() => null)} className="mt-8">
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Insira o número de celular vinculado à sua conta
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="(DDD) + Celular"
                  id="phone"
                  ref={withMask('99 99999-9999')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="smsCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Insira o código SMS (Token)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Código SMS" id="smsCode" />
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
};

export default RecoverySMSForm;
