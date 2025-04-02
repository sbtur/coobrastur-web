import { SupportListDesktop } from './support-list-desktop';
import { SupportListMobile } from './support-list-mobile';

import { Content } from '@ui/components/layouts/content';

export const SupportList = () => {
  return (
    <Content className="bg-transparent">
      <div className="hidden lg:block">
        <SupportListDesktop />
      </div>
      <div className="block lg:hidden">
        <SupportListMobile />
      </div>
    </Content>
  );
};
