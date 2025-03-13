import { Link } from '@components/Link';

import { MenuItem } from '../types/Menu.types';

import { Menu } from '@ui/components/Navigation/Menu';

export const MenuDropdown = ({ menu }: { menu: MenuItem }) => (
  <>
    <Menu.Trigger asChild>{menu.label}</Menu.Trigger>
    <Menu.Content>
      <Menu.Dropdown>
        {menu.items?.map(item => (
          <Menu.DropdownItem key={item.label}>
            <Link href={item.href} passHref legacyBehavior>
              <Menu.DropdownLink href={item.href}>
                <div className="text-primary leading-none text-lg font-bold">
                  {item.label}
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                  {item.description}
                </p>
              </Menu.DropdownLink>
            </Link>
          </Menu.DropdownItem>
        ))}
      </Menu.Dropdown>
    </Menu.Content>
  </>
);
