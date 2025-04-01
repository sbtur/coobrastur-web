import { IMenuItem } from '@/shared/types/menu.types';

import { MenuLink } from './menu-link';

import { Icon } from '@ui/components/data-display/icon';
import { Menu, MenuItem, MenuList } from '@ui/components/navigation/menu';
import { Sheet, SheetContent, SheetTrigger } from '@ui/components/sheet';
import { AlignRight } from '@ui/lib/icons';

export const MenuMobile = ({ menus }: { menus: IMenuItem[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="h-8 w-8">
          <Icon
            icon={AlignRight}
            className="h-8 w-8 text-primary-200 [.isLight_&]:text-white"
          />
        </button>
      </SheetTrigger>
      <SheetContent>
        <Menu>
          <MenuList>
            {menus.map(menu => (
              <MenuItem key={menu.label}>
                <MenuLink href={menu.href} label={menu.label} />
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </SheetContent>
    </Sheet>
  );
};
