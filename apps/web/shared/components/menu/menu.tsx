import { MenuDesktop } from './components/menu-desktop';
import { MenuMobile } from './components/menu-mobile';

import { IMenuItem } from '@shared/types/menu.types';

type MenuProps = {
  menuItems: IMenuItem[];
};

export const Menu = ({ menuItems }: MenuProps) => (
  <>
    <MenuDesktop menus={menuItems} />
    <MenuMobile menus={menuItems} />
  </>
);
