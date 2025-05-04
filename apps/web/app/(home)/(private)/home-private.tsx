import { HeaderPrivate } from '@components/header';

import { ButtonsMenu } from './containers/buttons-menu';
import { CarousselPrivate } from './containers/caroussel-private';
import { Promotions } from './containers/promotions';

import { Container } from '@ui/components/layouts/container';

export function HomePrivate() {
  return (
    <>
      <HeaderPrivate />

      <Container className="w-full" as="section">
        <CarousselPrivate />
      </Container>
      <Container className="w-full py-4" as="section">
        <ButtonsMenu />
      </Container>
      <Container className="w-full py-4" as="section">
        <Promotions />
      </Container>
    </>
  );
}
