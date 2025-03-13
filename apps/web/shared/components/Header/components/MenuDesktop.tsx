import { MenuItem } from '../types/Menu.types';
import { MenuDropdown } from './MenuDropdown';
import { MenuLink } from './MenuLink';

import { Menu } from '@ui/components/Navigation/Menu';

export const MenuDesktop = ({ menus }: { menus: MenuItem[] }) => {
  return (
    <Menu.Root>
      <Menu.List>
        {menus.map(menu => (
          <Menu.Item key={menu.label}>
            {menu.items ? (
              <MenuDropdown menu={menu} />
            ) : (
              <MenuLink href={menu.href} label={menu.label} />
            )}
          </Menu.Item>
        ))}
      </Menu.List>
    </Menu.Root>
  );
};
