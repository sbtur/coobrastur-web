import { Header } from '@components/Header';
import { UserMobileNavigation } from '@components/UserMobileNavigation';

import { Accommodations } from './containers/Accommodations';
import { Advantages } from './containers/Advantages';
import { Display } from './containers/Display';
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
          <UserMobileNavigation />
        </div>

        <Advantages />

        <Accommodations />

        <Partners />

        <Support />

        <Testimonials />
      </Container>
    </>
  );
}
