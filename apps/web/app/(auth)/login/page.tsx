'use client';

import { useForm } from 'react-hook-form';
import Image from 'next/image';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@shared/components/link';
import { loginValidationSchema } from '@shared/helpers/validation';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';
import { Label } from '@ui/components/data-entry/label';

type LoginFormData = z.infer<typeof loginValidationSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      cpfCnpj: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginFormData) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid lg:grid-cols-2 grid-cols-1 h-screen"
    >
      <div className="relative h-full w-full hidden lg:block">
        <Image
          src="/images/pages/login/grupo.png"
          alt="Login"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative h-full w-full px-[15%] py-[20%]">
        <div className="flex flex-col gap-4 pb-2 lg:text-left text-center">
          <div className="flex justify-center lg:hidden">
            <Image
              src="/images/pages/login/airplane-icon.svg"
              alt="Icone"
              width={55}
              height={55}
            />
          </div>
          <Title variant="primary">Acesse sua conta</Title>
          <Text className="pb-10">
            Preencha seus dados e continue sua jornada
          </Text>
        </div>
        <div className="flex flex-col gap-1 mb-10">
          <Label htmlFor="cpfCnpj" className="pb-2 text-neutral-500">
            Seu CPF/CNPJ
          </Label>
          <Input
            id="cpfCnpj"
            placeholder="CPF/CNPJ"
            maxLength={14}
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
        <div className="flex flex-col gap-1 mb-10">
          <Link
            href="/forgot-password"
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
      </div>
    </form>
  );
}
