import { MenuItem } from '../types/Menu.types';
import { MenuLink } from './MenuLink';

import { Icon } from '@ui/components/DataDisplay/Icon';
import { Menu } from '@ui/components/Navigation/Menu';
import { Sheet, SheetContent, SheetTrigger } from '@ui/components/sheet';
import { AlignRight } from '@ui/lib/icons';

export const MenuMobile = ({ menus }: { menus: MenuItem[] }) => {
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
        <Menu.Root>
          <Menu.List>
            {menus.map(menu => (
              <Menu.Item key={menu.label}>
                <MenuLink href={menu.href} label={menu.label} />
              </Menu.Item>
            ))}
          </Menu.List>
        </Menu.Root>
      </SheetContent>
    </Sheet>
  );
};
