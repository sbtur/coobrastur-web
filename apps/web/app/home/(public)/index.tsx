import { Header } from '@components/Header';
import { MobileNavigation } from '@components/MobileNavigation';

import { Advantages } from './containers/Advantages';
import { Destinations } from './containers/Destinations';
import { Display } from './containers/Display';
import { Hotels } from './containers/Hotels';
import { Partners } from './containers/Partners';
import { Support } from './containers/Support';
import { Testimonials } from './containers/Testimonials';

import { Container } from '@ui/components/Layouts/Container';

export function HomePublic() {
  return (
    <>
      <Container as="section" className="relative h-screen">
        <Header isLight />
        <Display />
      </Container>

      <Container as="main" className="relative z-10 bg-background">
        <div className="block md:hidden">
          <MobileNavigation />
        </div>

        <Hotels />

        <Partners />

        <Advantages />

        <Destinations />

        <Support />

        <Testimonials />
      </Container>
    </>
  );
}
