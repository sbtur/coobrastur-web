import { HeaderPrivate } from '@components/header';

import { Container } from '@ui/components/layouts/container';

export function HomePrivate() {
  return (
    <>
      <Container as="section" className="relative h-screen">
        <HeaderPrivate />
      </Container>

      <Container as="main" className="relative z-10 bg-background">
        <div>Conteudo</div>
      </Container>
    </>
  );
}
