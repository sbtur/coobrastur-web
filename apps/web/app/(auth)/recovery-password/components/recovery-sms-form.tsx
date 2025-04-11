'use client';
import { useForm } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { recoveryPasswordSMSValidationSchema } from '@shared/helpers/validation';
import { cellPhoneOrPhoneMask } from '@shared/utils/input-masks';
import { Text } from '@ui/components/data-display/text';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';
import { Label } from '@ui/components/data-entry/label';

const RecoverySMSForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof recoveryPasswordSMSValidationSchema>>({
    resolver: zodResolver(recoveryPasswordSMSValidationSchema),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative h-full w-full">
        <div className="flex flex-col gap-1 mb-10">
          <Label htmlFor="phone" className="text-neutral-500">
            Insira o número de celular vinculado à sua conta
          </Label>
          <MaskedInput
            mask={cellPhoneOrPhoneMask}
            id="phone"
            placeholder="(DDD) + Celular"
            render={(ref, props) => {
              return (
                <Input {...props} ref={ref as React.Ref<HTMLInputElement>} />
              );
            }}
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <Label htmlFor="smsCode" className="text-neutral-500">
            Insira o código SMS (Token)
          </Label>
          <Input
            id="smsCode"
            type="text"
            placeholder="Código de recuperação"
            {...register('smsCode')}
          />
          {errors.smsCode && (
            <Text className="text-red-500">{errors.smsCode.message}</Text>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Button type="submit" className="w-full p-4 mb-3">
            Redefinir senha
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RecoverySMSForm;
