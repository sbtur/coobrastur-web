import { SupportListDesktop } from './support-list-desktop';
import { SupportListMobile } from './support-list-mobile';

import { Content } from '@ui/components/layouts/content';

export const SupportList = () => {
  return (
    <Content className="bg-transparent">
      <SupportListDesktop />
      <SupportListMobile />
    </Content>
  );
};
