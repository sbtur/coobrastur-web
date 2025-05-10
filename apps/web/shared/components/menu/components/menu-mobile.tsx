'use client';

import { Link } from '@components/link';

import { IMenuItem } from '@/shared/types/menu.types';

import { Icon } from '@ui/components/data-display/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@ui/components/data-display/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@ui/components/navigation/menu';
import { MenuIcon } from '@ui/lib/icons';

export const MenuMobile = ({ menus }: { menus: IMenuItem[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="grid lg:hidden">
          <Icon
            icon={MenuIcon}
            className="h-8 w-8 text-primary-200 [.isLight_&]:text-white"
          />
          <span className="text-xs text-white">Menu</span>
        </button>
      </SheetTrigger>
      <SheetContent className="bg-gray-100">
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map(menu => (
              <NavigationMenuItem key={menu.label}>
                <Link href={menu.href} passHref legacyBehavior>
                  <NavigationMenuLink href={menu.href}>
                    {menu.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
};
