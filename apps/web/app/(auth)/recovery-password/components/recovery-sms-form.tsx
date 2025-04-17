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
import { recoveryPasswordSMSValidationSchema } from '@shared/helpers/validation';
import { cellPhoneOrPhoneMask } from '@shared/utils/input-masks';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';

const RecoverySMSForm = () => {
  const form = useForm<z.infer<typeof recoveryPasswordSMSValidationSchema>>({
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
                <MaskedInput
                  mask={cellPhoneOrPhoneMask}
                  id="phone"
                  placeholder="(DDD) + Celular"
                  {...field}
                  render={(ref, props) => {
                    return (
                      <Input
                        {...props}
                        ref={ref as React.Ref<HTMLInputElement>}
                      />
                    );
                  }}
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
                <MaskedInput
                  mask={cellPhoneOrPhoneMask}
                  id="smsCode"
                  placeholder="(DDD) + Celular"
                  {...field}
                  render={(ref, props) => {
                    return (
                      <Input
                        {...props}
                        ref={ref as React.Ref<HTMLInputElement>}
                      />
                    );
                  }}
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
};

export default RecoverySMSForm;
