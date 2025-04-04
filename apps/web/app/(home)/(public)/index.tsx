import { HeaderPublic } from '@components/header/header-public';

import { Accommodations } from './containers/accommodations';
import { Advantages } from './containers/advantages';
import { CategoriesPlans } from './containers/categories-plans';
import { Display } from './containers/display';
import { Partners } from './containers/partners';
import { Support } from './containers/support';
import { Testimonials } from './containers/testimonials';

export function HomePublic() {
  return (
    <>
      <HeaderPublic light />
      <div className="relative h-screen">
        <Display />
      </div>

      <div className="relative z-10 bg-background">
        <Advantages />

        <Accommodations />

        <Partners />

        <CategoriesPlans />

        <Support />

        <Testimonials />
      </div>
    </>
  );
}
