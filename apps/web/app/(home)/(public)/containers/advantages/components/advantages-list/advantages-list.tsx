import { AdvantagesListDesktop } from './advantages-list-desktop';
import { AdvantagesListMobile } from './advantages-list-mobile';

import { Content } from '@ui/components/layouts/content';

export const AdvantagesList = () => {
  return (
    <Content>
      <div className="hidden lg:block">
        <AdvantagesListDesktop />
      </div>
      <div className="block lg:hidden">
        <AdvantagesListMobile />
      </div>
    </Content>
  );
};
