import { Metadata } from 'next';
import Link from 'next/link';

import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';

export const metadata: Metadata = {
  title: 'Feedback Sucesso',
  description: 'Feedback Sucesso',
};

export default function FeedbackPage() {
  return (
    <>
      <Heading className="text-center lg:text-left p-0 gap-1">
        <Title>Tudo certo!</Title>
        <Text>
          Sua senha foi redefinida. Acesse sua conta com a nova senha.
        </Text>
      </Heading>
      <Button className="w-full mt-4">
        <Link href="/login">Acessar Minha Conta</Link>
      </Button>
    </>
  );
}
