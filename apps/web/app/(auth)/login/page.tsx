'use client';

import Image from 'next/image';

import { Link } from '@shared/components/link';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Input } from '@ui/components/data-entry/input';
import { Label } from '@ui/components/data-entry/label';

export default function Login() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="relative h-full w-full">
        <Image
          src="/images/pages/login/grupo.png"
          alt="Login"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative h-full w-full px-[15%] py-[25%]">
        <div className="flex flex-col gap-4 pb-2">
          <Title variant="primary">Acesse sua conta</Title>
          <Text className="pb-10">
            Preencha seus dados e continue sua jornada
          </Text>
        </div>
        <div className="flex flex-col gap-1 mb-10">
          <Label htmlFor="cpf_cnpj" className="pb-2 text-neutral-500">
            Seu CPF/CNPJ
          </Label>
          <Input id="cpf_cnpj" placeholder="CPF/CNPJ" />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <Label htmlFor="password" className="pb-2 text-neutral-500">
            Senha
          </Label>
          <Input id="password" placeholder="Senha" />
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href="/forgot-password"
            className="text-highlight-100 text-sm underline font-bold"
          >
            Esqueci minha senha
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          {/* <Button>Entrar</Button> */}
        </div>
      </div>
    </div>
  );
}
