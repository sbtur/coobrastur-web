import { Container } from '@workspace/ui/components/Layouts/Container';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import { Advantages } from './interfaces/Advantages';
import { Destinations } from './interfaces/Destinations';
import { Display } from './interfaces/Display';
import { Hotels } from './interfaces/Hotels';
import { Partners } from './interfaces/Partners';
import { Support } from './interfaces/Support';
import { Testimonials } from './interfaces/Testimonials';

export function HomePublic() {
  return (
    <>
      <Container as="section" className="relative h-screen">
        <Header />
        <Display />
      </Container>

      <Container as="main" className="relative z-10">
        <Hotels />

        <Partners />

        <Advantages />

        <Destinations />

        <Support />

        <Testimonials />

        <Footer />
      </Container>
    </>
  );
}
