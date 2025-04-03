import { Header } from '@components/header';

import { Accommodations } from './containers/accommodations';
import { Advantages } from './containers/advantages';
import { Display } from './containers/display';
import { Partners } from './containers/partners';
import { Support } from './containers/support';
import { Testimonials } from './containers/testimonials';

export function HomePublic() {
  return (
    <>
      <div className="relative h-screen">
        <Header isLight />
        <Display />
      </div>

      <div className="relative z-10 bg-background">
        <Advantages />

        <Accommodations />

        <Partners />

        <Support />

        <Testimonials />
      </div>
    </>
  );
}
