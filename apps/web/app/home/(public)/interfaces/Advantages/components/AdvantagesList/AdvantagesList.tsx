import { Section } from '@workspace/ui/components/Layouts/Section';

import { AdvantagesListDesktop } from './AdvantagesList.Desktop';
import { AdvantagesListMobile } from './AdvantagesList.Mobile';

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
