import { Fragment } from 'react';

import { IMenuItem } from '@/shared/types/menu.types';

import { MenuDropdown } from './menu-dropdown';
import { MenuItem } from './menu-item';

import { Icon } from '@ui/components/data-display/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@ui/components/data-display/sheet';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@ui/components/navigation/menu';
import { Menu as MenuIcon } from '@ui/lib/icons';

export const MenuResponsive = ({ menus }: { menus: IMenuItem[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="h-8 w-8">
          <Icon icon={MenuIcon} className="h-8 w-8" variant="white" />
        </button>
      </SheetTrigger>
      <SheetContent side="top">
        <NavigationMenu className="mx-auto">
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
      </SheetContent>
    </Sheet>
  );
};
