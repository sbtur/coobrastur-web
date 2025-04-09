import { useForm } from 'react-hook-form';
import Image from 'next/image';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { loginValidationSchema } from '@shared/helpers/validation';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';
import { Label } from '@ui/components/data-entry/label';

const RecoveryEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="relative h-full w-full">
      <div className="flex flex-col gap-1 mb-10">
        <Label htmlFor="cpfCnpj" className="pb-2 text-neutral-500">
          Insira seu CPF
        </Label>
        <Input
          id="cpfCnpj"
          placeholder="CPF"
          maxLength={11}
          {...register('cpfCnpj')}
        />
        {errors.cpfCnpj && (
          <Text className="text-red-500">{errors.cpfCnpj.message}</Text>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <Label htmlFor="password" className="pb-2 text-neutral-500">
          Senha
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Senha"
          {...register('password')}
        />
        {errors.password && (
          <Text className="text-red-500">{errors.password.message}</Text>
        )}
      </div>
    </div>
  );
};

export default RecoveryEmail;
