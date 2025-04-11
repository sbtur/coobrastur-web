'use client';

import { Controller, useForm } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { recoveryPasswordEmailValidationSchema } from '@shared/helpers/validation';
import { cpfOrCnpjMask } from '@shared/utils/input-masks';
import { Text } from '@ui/components/data-display/text';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';
import { Label } from '@ui/components/data-entry/label';

type RecoveryEmailFormData = z.infer<
  typeof recoveryPasswordEmailValidationSchema
>;

const RecoveryEmailForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoveryEmailFormData>({
    resolver: zodResolver(recoveryPasswordEmailValidationSchema),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative h-full w-full">
        <div className="flex flex-col gap-1 mb-10">
          <Label htmlFor="cpfCnpj" className="text-neutral-500">
            Insira seu CPF ou CNPJ
          </Label>
          <Controller
            name="cpfCnpj"
            control={control}
            render={({ field }) => (
              <MaskedInput
                mask={cpfOrCnpjMask}
                placeholder="CPF/CNPJ"
                id="cpfCnpj"
                {...field}
                render={(ref, props) => (
                  <Input {...props} ref={ref as React.Ref<HTMLInputElement>} />
                )}
              />
            )}
          />
          {errors.cpfCnpj && (
            <Text className="text-red-500">{errors.cpfCnpj.message}</Text>
          )}
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <Label htmlFor="email" className="text-neutral-500">
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
