import { IMenuItem } from '@/shared/types/menu.types';

import { Icon } from '@ui/components/data-display/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@ui/components/data-display/sheet';
import {
  Menu,
  MenuItem,
  MenuLink,
  MenuList,
} from '@ui/components/navigation/menu';
import { Menu as MenuIcon } from '@ui/lib/icons';

export const MenuMobile = ({ menus }: { menus: IMenuItem[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="grid justify-items-center gap-1 text-text text-xs"
        >
          <Icon icon={MenuIcon} />
          Menu
        </button>
      </SheetTrigger>
      <SheetContent>
        <Menu>
          <MenuList>
            {menus.map(menu => (
              <MenuItem key={menu.label}>
                <MenuLink href={menu.href}>{menu.label}</MenuLink>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </SheetContent>
    </Sheet>
  );
};
