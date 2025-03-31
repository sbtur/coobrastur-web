import { Header } from '@components/header';
import { UserMobileNavigation } from '@components/user-mobile-navigation';

import { Accommodations } from './containers/accommodations';
import { Advantages } from './containers/advantages';
import { Display } from './containers/display';
import { Partners } from './containers/partners';
import { Support } from './containers/support';
import { Testimonials } from './containers/testimonials';

import { MENU_ITEMS } from '@shared/helpers/menu';
import { Container } from '@ui/components/layouts/container';

export function HomePublic() {
  return (
    <>
      <Container as="section" className="relative h-screen">
        <Header isLight />
        <Display />
      </Container>

      <Container as="main" className="relative z-10 bg-background">
        <div className="block md:hidden">
          <UserMobileNavigation menuItems={MENU_ITEMS} />
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
