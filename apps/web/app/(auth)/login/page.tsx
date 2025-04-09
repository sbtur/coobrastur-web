'use client';

import { useState } from 'react';
import Image from 'next/image';

import { z } from 'zod';

import { Link } from '@shared/components/link';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';
import { Label } from '@ui/components/data-entry/label';

const loginSchema = z.object({
  cpf: z.string().min(14, { message: 'CPF/CNPJ é obrigatório' }),
  password: z.string().min(8, { message: 'Senha é obrigatória' }),
});

export default function Login() {
  const [cpf, setCpf] = useState('');

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
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
          <Label htmlFor="cpf_cnpj" className="pb-2 text-neutral-500">
            Seu CPF/CNPJ
          </Label>
          <Input
            id="cpf_cnpj"
            placeholder="CPF/CNPJ"
            maxLength={14}
            value={cpf}
            onChange={e => {
              const value = e.target.value.replace(/\D/g, '');
              const formattedValue = value.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                '$1.$2.$3-$4',
              );
              setCpf(formattedValue);
            }}
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <Label htmlFor="password" className="pb-2 text-neutral-500">
            Senha
          </Label>
          <Input id="password" type="password" placeholder="Senha" />
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
          <Button className="w-full p-4 mb-3">Acessar minha conta</Button>

          <Button className="w-full p-4" variant="outline">
            Primeiro acesso
          </Button>
        </div>
      </div>
    </div>
  );
}
