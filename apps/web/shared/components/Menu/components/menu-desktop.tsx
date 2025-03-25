import { IMenuItem } from '../types/menu.types';
import { MenuDropdown } from './menu-dropdown';
import { MenuLink } from './menu-link';

import { Menu, MenuItem, MenuList } from '@ui/components/navigation/menu';

export const MenuDesktop = ({ menus }: { menus: IMenuItem[] }) => {
  return (
    <Menu>
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
  );
};
