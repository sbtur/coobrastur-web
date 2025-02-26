import { Icon } from '@workspace/ui/components/DataDisplay/Icon';
import { Menu } from '@workspace/ui/components/Navigation/Menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@workspace/ui/components/sheet';
import { Menu as MenuIcon } from '@workspace/ui/lib/icons';

import type { MenuItem } from './Menu.types';

export const MenuMobile = ({ menus }: { menus: MenuItem[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="h-8 w-8">
          <Icon icon={MenuIcon} className="h-8 w-8" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <Menu.Root>
          <Menu.List>
            {menus.map(menu => (
              <Menu.Item key={menu.label}>
                <Menu.Link href={menu.href}>{menu.label}</Menu.Link>
              </Menu.Item>
            ))}
          </Menu.List>
        </Menu.Root>
      </SheetContent>
    </Sheet>
  );
};
