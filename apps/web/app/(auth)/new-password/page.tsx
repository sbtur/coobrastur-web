import { Metadata } from 'next';

import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';

import NewPasswordForm from './components/new-password-form';

export const metadata: Metadata = {
  title: 'Redefinir senha',
  description: 'Redefina sua senha',
};

export default function NewPassword() {
  return (
    <>
      <Heading className="text-center lg:text-left p-0 gap-1">
        <Title>Sua nova senha</Title>
        <Text>
          Para continuar, crie uma nova senha segura para acessar sua conta.
        </Text>
      </Heading>
      <NewPasswordForm />
    </>
  );
}
