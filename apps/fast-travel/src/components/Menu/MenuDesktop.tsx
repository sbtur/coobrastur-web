import { MenuDropdown } from './components/MenuDropdown';
import { MenuLink } from './components/MenuLink';
import { MenuItem } from './types/Menu.types';

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
