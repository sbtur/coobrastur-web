import { AdvantagesListDesktop } from './advantages-list-desktop';
import { AdvantagesListMobile } from './advantages-list-mobile';

import { Section } from '@ui/components/layouts/section';

export const AdvantagesList = () => {
  return (
    <Section>
      <div className="hidden lg:block">
        <AdvantagesListDesktop />
      </div>
      <div className="block lg:hidden">
        <AdvantagesListMobile />
      </div>
    </Section>
  );
};
