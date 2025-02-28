import { Section } from '@workspace/ui/components/Layouts/Section';

import { SupportListDesktop } from './SupportList.Desktop';
import { SupportListMobile } from './SupportList.Mobile';

export const SupportList = () => {
  return (
    <Section>
      <div className="hidden md:block">
        <SupportListDesktop />
      </div>
      <div className="block md:hidden">
        <SupportListMobile />
      </div>
    </Section>
  );
};
