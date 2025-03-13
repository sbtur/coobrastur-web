import { Link } from '@components/Link';

import { MenuItem } from '../types/Menu.types';
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
              <Link href={menu.href} passHref legacyBehavior>
                <Menu.Link href={menu.href}>{menu.label}</Menu.Link>
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.List>
    </Menu.Root>
  );
};
