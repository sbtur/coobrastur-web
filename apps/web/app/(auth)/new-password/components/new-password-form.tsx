'use client';

import { z } from 'zod';

import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { useForm } from '@coobrastur/ui/lib/form';
import { zodResolver } from '@coobrastur/ui/lib/validation';

import { InputPassword } from './input-password';

import { newPasswordValidationSchema } from '@shared/helpers/validation';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Button } from '@ui/components/data-entry/button';
import { Label } from '@ui/components/data-entry/label';

export default function NewPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof newPasswordValidationSchema>>({
    resolver: zodResolver(newPasswordValidationSchema),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading className="pb-10 ml-0 pl-0">
          <Title>Escolha sua nova senha</Title>
          <Text>
            Para continuar, crie uma nova senha segura para acessar sua conta.
          </Text>
        </Heading>

        <div className="flex flex-col gap-1 mb-8">
          <Label htmlFor="newPassword" className="text-neutral-500">
            Nova senha
          </Label>
          <InputPassword
            id="newPassword"
            placeholder="Senha"
            register={register}
            error={errors.newPassword?.message}
          />
        </div>
        <div className="flex flex-col gap-1 mb-8">
          <Label htmlFor="confirmPassword" className="text-neutral-500">
            Confirmar senha
          </Label>
          <InputPassword
            id="confirmPassword"
            placeholder="Confirmar senha"
            register={register}
            error={errors.confirmPassword?.message}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Button type="submit" className="w-full p-4 mb-3">
            Redefinir senha
          </Button>
        </div>
      </form>
    </>
  );
}
