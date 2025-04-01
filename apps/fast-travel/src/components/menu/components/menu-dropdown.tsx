import Link from 'next/link';

import { MenuItem } from '../types/Menu.types';

import {
  MenuContent,
  MenuDropdown,
  MenuDropdownItem,
  MenuDropdownLink,
  MenuTrigger,
} from '@ui/components/navigation/menu';

export const MenuDropdownComposed = ({ menu }: { menu: MenuItem }) => (
  <>
    <MenuTrigger asChild>{menu.label}</MenuTrigger>
    <MenuContent>
      <MenuDropdown>
        {menu.items?.map(item => (
          <MenuDropdownItem key={item.label}>
            <Link href={item.href} passHref legacyBehavior>
              <MenuDropdownLink href={item.href}>
                <div className="text-primary leading-none text-lg font-bold">
                  {item.label}
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                  {item.description}
                </p>
              </MenuDropdownLink>
            </Link>
          </MenuDropdownItem>
        ))}
      </MenuDropdown>
    </MenuContent>
  </>
);
