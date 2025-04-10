import { useForm } from 'react-hook-form';
import Image from 'next/image';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { recoveryPasswordSMSValidationSchema } from '@shared/helpers/validation';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
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
    <div className="relative h-full w-full">
      <div className="flex flex-col gap-1 mb-10">
        <Label htmlFor="phone" className="pb-2 text-neutral-500">
          Insira o número de celular vinculado à sua conta
        </Label>
        <Input
          id="phone"
          placeholder="(DDD) + Celular"
          maxLength={11}
          {...register('phone')}
        />
        {errors.phone && (
          <Text className="text-red-500">{errors.phone.message}</Text>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <Label htmlFor="smsCode" className="pb-2 text-neutral-500">
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
  );
};

export default RecoverySMSForm;
