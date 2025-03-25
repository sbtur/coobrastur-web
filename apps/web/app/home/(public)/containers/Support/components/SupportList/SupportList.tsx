import { SupportListDesktop } from './SupportList.Desktop';
import { SupportListMobile } from './SupportList.Mobile';

import { Section } from '@ui/components/Layouts/Section';

export const SupportList = () => {
  return (
    <Section>
      <div className="hidden lg:block">
        <SupportListDesktop />
      </div>
      <div className="block lg:hidden">
        <SupportListMobile />
      </div>
    </Section>
  );
};
