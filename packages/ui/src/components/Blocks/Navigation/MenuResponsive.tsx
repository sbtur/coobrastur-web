import { Icon } from '@coobrastur/ui/components/DataDisplay/Icon';
import { Menu } from '@coobrastur/ui/components/Navigation/Menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@coobrastur/ui/components/sheet';
import { Menu as MenuIcon } from '@coobrastur/ui/lib/icons';

import type { MenuItem } from './Menu.types';
import { MenuDropdown } from './MenuDropdown';

export const MenuResponsive = ({ menus }: { menus: MenuItem[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="h-8 w-8">
          <Icon icon={MenuIcon} className="h-8 w-8" variant="white" />
        </button>
      </SheetTrigger>
      <SheetContent side="top">
        <Menu.Root className="mx-auto">
          <Menu.List>
            {menus.map(menu => (
              <Menu.Item key={menu.label}>
                {menu.items ? (
                  <MenuDropdown menu={menu} />
                ) : (
                  <Menu.Link href={menu.href}>{menu.label}</Menu.Link>
                )}
              </Menu.Item>
            ))}
          </Menu.List>
        </Menu.Root>
      </SheetContent>
    </Sheet>
  );
};
