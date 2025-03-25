import { MenuDesktop } from './components/menu-desktop';
import { MenuMobile } from './components/menu-mobile';
import { MenuResponsive } from './components/menu-responsive';
import { MENU_ITEMS } from './helpers/menu';

export const Menu = () => (
  <>
    <div className="hidden lg:block">
      <MenuDesktop menus={MENU_ITEMS} />
    </div>
    <div className="hidden md:block lg:hidden">
      <MenuResponsive menus={MENU_ITEMS} />
    </div>
    <div className="md:hidden">
      <MenuMobile menus={MENU_ITEMS} />
    </div>
  </>
);
