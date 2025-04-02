import { Fragment } from 'react';

import { IMenuItem } from '@/shared/types/menu.types';

import { MenuDropdown } from './menu-dropdown';
import { MenuItem } from './menu-item';

import {
  NavigationMenu,
  NavigationMenuList,
} from '@ui/components/navigation/menu';

export const MenuDesktop = ({ menus }: { menus: IMenuItem[] }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map(menu => (
          <Fragment key={menu.label}>
            {menu.items ? (
              <MenuDropdown menu={menu} />
            ) : (
              <MenuItem href={menu.href}>{menu.label}</MenuItem>
            )}
          </Fragment>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
