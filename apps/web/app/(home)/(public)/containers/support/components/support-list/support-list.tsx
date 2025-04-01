import { SupportListDesktop } from './support-list-desktop';
import { SupportListMobile } from './support-list-mobile';

import { Section } from '@ui/components/layouts/section';

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
