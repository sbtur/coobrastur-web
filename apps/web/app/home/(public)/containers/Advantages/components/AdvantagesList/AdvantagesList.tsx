import { AdvantagesListDesktop } from './AdvantagesList.Desktop';
import { AdvantagesListMobile } from './AdvantagesList.Mobile';

import { Section } from '@ui/components/Layouts/Section';

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
