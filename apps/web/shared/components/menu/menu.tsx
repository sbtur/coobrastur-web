import { MenuDesktop } from './components/menu-desktop';
import { MenuMobile } from './components/menu-mobile';
import { MenuMobilePrivate } from './components/menu-mobile-private';

import { IMenuItem } from '@shared/types/menu.types';

type MenuProps = {
  menuItems: IMenuItem[];
  isAuthenticated?: boolean;
};

export const Menu = ({ menuItems, isAuthenticated = false }: MenuProps) => {
  return (
    <>
      <MenuDesktop menus={menuItems} />
      {isAuthenticated ? (
        <MenuMobilePrivate />
      ) : (
        <MenuMobile menus={menuItems} />
      )}
    </>
  );
};
