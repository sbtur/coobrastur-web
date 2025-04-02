import { HeaderPrivate } from '@components/header';

import { Container } from '@ui/components/layouts/container';

export function HomePrivate() {
  return (
    <>
      <HeaderPrivate />

      <Container as="main">
        <div>Conteudo</div>
      </Container>
    </>
  );
}
