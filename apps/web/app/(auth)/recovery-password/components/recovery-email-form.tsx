'use client';

import { useForm } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { Metadata } from 'next';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { recoveryPasswordEmailValidationSchema } from '@shared/helpers/validation';
import { cpfOrCnpjMask } from '@shared/utils/input-masks';
import { Text } from '@ui/components/data-display/text';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';
import { Label } from '@ui/components/data-entry/label';

export const metadata: Metadata = {
  title: 'Recuperar senha via email | Coobrastur',
  description: 'Recupere sua senha através do email',
};

const RecoveryEmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof recoveryPasswordEmailValidationSchema>>({
    resolver: zodResolver(recoveryPasswordEmailValidationSchema),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative h-full w-full">
        <div className="flex flex-col gap-1 mb-10">
          <Label htmlFor="cpfCnpj" className="pb-2 text-neutral-500">
            Insira seu CPF
          </Label>
          <MaskedInput
            mask={cpfOrCnpjMask}
            id="cpfCnpj"
            placeholder="CPF/CNPJ"
            render={(ref, props) => {
              return (
                <Input {...props} ref={ref as React.Ref<HTMLInputElement>} />
              );
            }}
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <Label htmlFor="email" className="pb-2 text-neutral-500">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && (
            <Text className="text-red-500">{errors.email.message}</Text>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Button type="submit" className="w-full p-4 mb-3">
            Redefinir senha por email
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RecoveryEmailForm;
