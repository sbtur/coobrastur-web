import { MenuDropdownComposed as MenuDropdown } from './components/menu-dropdown';
import { MenuLinkComposed as MenuLink } from './components/menu-link';
import { MenuItem as MenuItemType } from './types/Menu.types';

import { Icon } from '@ui/components/data-display/icon';
import { Menu, MenuItem, MenuList } from '@ui/components/navigation/menu';
import { Sheet, SheetContent, SheetTrigger } from '@ui/components/sheet';
import { Menu as MenuIcon } from '@ui/lib/icons';

export const MenuResponsive = ({ menus }: { menus: MenuItemType[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="h-8 w-8">
          <Icon icon={MenuIcon} className="h-8 w-8" variant="white" />
        </button>
      </SheetTrigger>
      <SheetContent side="top">
        <Menu className="mx-auto">
          <MenuList>
            {menus.map(menu => (
              <MenuItem key={menu.label}>
                {menu.items ? (
                  <MenuDropdown menu={menu} />
                ) : (
                  <MenuLink href={menu.href} label={menu.label} />
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </SheetContent>
    </Sheet>
  );
};
