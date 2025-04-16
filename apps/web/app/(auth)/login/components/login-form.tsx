'use client';

import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

import { Loader } from 'lucide-react';
import { z } from 'zod';

import { Heading } from '@coobrastur/ui/components/data-display/heading';

import { InputPassword } from '../../new-password/components/input-password';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@shared/components/link';
import { loginValidationSchema } from '@shared/helpers/validation';
import { cpfOrCnpjMask } from '@shared/utils/input-masks';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';
import { Label } from '@ui/components/data-entry/label';

type LoginFormData = z.infer<typeof loginValidationSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values: LoginFormData) => {
    console.log(values);
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginValidationSchema),
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isLoading) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isLoading]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading className="pb-10 ml-0 pl-0 lg:text-left text-center">
          <Title>Acesse sua conta</Title>
          <Text>Preencha seus dados e continue sua jornada</Text>
        </Heading>

        <div className="flex flex-col gap-1 mb-6">
          <Label htmlFor="cpfCnpj" className="text-neutral-500">
            Seu CPF/CNPJ
          </Label>
          <div className="relative">
            <Controller
              name="cpfCnpj"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <MaskedInput
                    mask={cpfOrCnpjMask}
                    placeholder="CPF/CNPJ"
                    id="cpfCnpj"
                    {...field}
                    onBlur={() => setIsLoading(true)}
                    render={(ref, props) => (
                      <Input
                        {...props}
                        ref={ref as React.Ref<HTMLInputElement>}
                        className={isLoading ? 'pr-8' : ''}
                      />
                    )}
                  />
                  {isLoading && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Loader className="h-4 w-4 animate-spin text-highlight-100" />
                    </div>
                  )}
                </div>
              )}
            />
          </div>
          {errors.cpfCnpj && (
            <Text className="text-red-500 text-sm">
              {errors.cpfCnpj.message}
            </Text>
          )}
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <Label htmlFor="password" className="text-neutral-500">
            Senha
          </Label>
          <InputPassword
            id="password"
            placeholder="Senha"
            {...register('password')}
          />
          {errors.password && (
            <Text className="text-red-500 text-sm">
              {errors.password.message}
            </Text>
          )}
        </div>
        <div className="flex flex-col gap-1 mb-6">
          <Link
            href="/recovery-password"
            className="text-highlight-100 text-sm underline font-bold"
          >
            Esqueci minha senha
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <Button type="submit" className="w-full p-4 mb-3">
            Acessar minha conta
          </Button>

          <Button className="w-full p-4" variant="outline">
            Primeiro acesso
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
