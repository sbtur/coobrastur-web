import { MenuDropdownComposed as MenuDropdown } from './components/menu-dropdown';
import { MenuLinkComposed as MenuLink } from './components/menu-link';
import { MenuItem as MenuItemType } from './types/Menu.types';

import { Menu, MenuItem, MenuList } from '@ui/components/navigation/menu';

export const MenuDesktop = ({ menus }: { menus: MenuItemType[] }) => {
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
