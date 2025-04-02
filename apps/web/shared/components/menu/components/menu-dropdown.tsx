import { Link } from '@components/link';

import { IMenuItem } from '@/shared/types/menu.types';

import {
  NavigationMenuContent,
  NavigationMenuDropdown,
  NavigationMenuDropdownItem,
  NavigationMenuDropdownLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@ui/components/navigation/menu';

export const MenuDropdown = ({ menu }: { menu: IMenuItem }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
    <NavigationMenuContent>
      <NavigationMenuDropdown>
        {menu.items?.map(item => (
          <NavigationMenuDropdownItem key={item.label}>
            <Link href={item.href} passHref legacyBehavior>
              <NavigationMenuDropdownLink href={item.href}>
                <div className="text-primary leading-none text-lg font-bold">
                  {item.label}
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                  {item.description}
                </p>
              </NavigationMenuDropdownLink>
            </Link>
          </NavigationMenuDropdownItem>
        ))}
      </NavigationMenuDropdown>
    </NavigationMenuContent>
  </NavigationMenuItem>
);
