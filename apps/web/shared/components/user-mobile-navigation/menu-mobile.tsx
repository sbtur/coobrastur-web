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
import { Menu as MenuIcon } from '@ui/lib/icons';

export const MenuMobile = ({ menus }: { menus: IMenuItem[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="grid justify-items-center gap-1 text-text text-xs"
        >
          <Icon icon={MenuIcon} />
          Menu
        </button>
      </SheetTrigger>
      <SheetContent>
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
