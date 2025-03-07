import { Menu } from '@coobrastur/ui/components/Navigation/Menu';

import type { MenuItem } from './Menu.types';

export const MenuDropdown = ({ menu }: { menu: MenuItem }) => (
  <>
    <Menu.Trigger asChild>{menu.label}</Menu.Trigger>
    <Menu.Content>
      <Menu.Dropdown>
        {menu.items?.map(item => (
          <Menu.DropdownItem key={item.label}>
            <Menu.DropdownLink href={item.href}>
              <div className="text-primary leading-none text-lg font-bold">
                {item.label}
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                {item.description}
              </p>
            </Menu.DropdownLink>
          </Menu.DropdownItem>
        ))}
      </Menu.Dropdown>
    </Menu.Content>
  </>
);
