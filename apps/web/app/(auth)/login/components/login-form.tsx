'use client';

import { useForm } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

import { z } from 'zod';

import { Heading } from '@coobrastur/ui/components/data-display/heading';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit = (values: LoginFormData) => {
    console.log(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading className="pb-10 ml-0 pl-0">
          <Title>Acesse sua conta</Title>
          <Text>Preencha seus dados e continue sua jornada</Text>
        </Heading>

        <div className="flex flex-col gap-1 mb-10">
          <Label htmlFor="cpfCnpj" className="pb-2 text-neutral-500">
            Seu CPF/CNPJ
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
        <div className="flex flex-col gap-1 mb-10">
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
