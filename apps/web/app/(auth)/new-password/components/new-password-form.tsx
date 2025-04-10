'use client';

import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';
import { z } from 'zod';

import { useForm } from '@coobrastur/ui/lib/form';
import { zodResolver } from '@coobrastur/ui/lib/validation';

import { newPasswordValidationSchema } from '@shared/helpers/validation';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';
import { Label } from '@ui/components/data-entry/label';

export default function NewPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <Title variant="primary">Escolha sua nova senha</Title>
        <Text className="pb-10">
          Para continuar, crie uma nova senha segura para acessar sua conta.
        </Text>

        <div className="flex flex-col gap-1 mb-8">
          <Label htmlFor="newPassword" className="pb-2 text-neutral-500">
            Nova senha
          </Label>
          <div className="relative">
            <Input
              id="newPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              {...register('newPassword')}
            />
            {errors.newPassword && (
              <Text className="text-red-500">{errors.newPassword.message}</Text>
            )}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <Eye className="h-4 w-4 text-muted-foreground" />
              ) : (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-8">
          <Label htmlFor="confirmPassword" className="pb-2 text-neutral-500">
            Confirmar senha
          </Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Senha"
              {...register('confirmPassword')}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? (
                <Eye className="h-4 w-4 text-muted-foreground" />
              ) : (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <Text className="text-red-500">
              {errors.confirmPassword.message}
            </Text>
          )}
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
