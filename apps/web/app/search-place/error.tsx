'use client';

import { useEffect } from 'react';

import { RefreshCwOff } from 'lucide-react';

import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Content } from '@coobrastur/ui/components/layouts/content';

export default function SearchPlaceError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container as="section" className="flex flex-col h-full pt-0 pb-8 lg:pb-14">
      <Content className="flex flex-col items-center justify-center text-center gap-4 h-full text-2xl leading-10 font-bold text-primary-300">
        <Icon
          icon={RefreshCwOff}
          variant="danger"
          className="w-[60px] h-[60px]"
        />
        Tivemos um erro inesperado.
        <br />
        Por favor, tente novamente, ou entre em contato conosco.
        <Button onClick={reset}>Tentar novamente</Button>
      </Content>
    </Container>
  );
}
