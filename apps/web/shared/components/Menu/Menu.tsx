import { MenuDesktop } from './components/menu-desktop';
import { MenuMobile } from './components/menu-mobile';
import { MenuResponsive } from './components/menu-responsive';

import { IMenuItem } from '@shared/types/menu.types';

type MenuProps = {
  menuItems: IMenuItem[];
};

export const Menu = ({ menuItems }: MenuProps) => (
  <>
    <div className="hidden lg:block">
      <MenuDesktop menus={menuItems} />
    </div>
    <div className="hidden md:block lg:hidden">
      <MenuResponsive menus={menuItems} />
    </div>
    <div className="md:hidden">
      <MenuMobile menus={menuItems} />
    </div>
  </>
);
