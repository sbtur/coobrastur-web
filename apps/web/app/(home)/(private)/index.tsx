import { HeaderPrivate } from '@components/header';

import { Accommodations } from '../(public)/containers/accommodations';
import { Support } from '../(public)/containers/support';
import { Testimonials } from '../(public)/containers/testimonials';

import { Container } from '@ui/components/layouts/container';

export function HomePrivate() {
  return (
    <>
      <HeaderPrivate />

      <Container as="main">
        <Accommodations />

        <Support />

        <Testimonials />
      </Container>
    </>
  );
}
