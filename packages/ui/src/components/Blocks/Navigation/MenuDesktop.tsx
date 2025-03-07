import type { MenuItem } from './Menu.types';
import { MenuDropdown } from './MenuDropdown';

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
              <Menu.Link href={menu.href}>{menu.label}</Menu.Link>
            )}
          </Menu.Item>
        ))}
      </Menu.List>
    </Menu.Root>
  );
};
