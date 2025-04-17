import { Metadata } from 'next';

import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';

import LoginForm from './components/login-form';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Efetue o login para acessar o sistema',
};

export default function Login() {
  return (
    <>
      <Heading className="text-center lg:text-left p-0 gap-1">
        <Title>Acesse sua conta</Title>
        <Text>Preencha seus dados e continue sua jornada</Text>
      </Heading>
      <LoginForm />
    </>
  );
}
