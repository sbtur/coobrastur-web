import { NavigationMenuList } from './navigation-menu';

import { NavigationMenuListProps } from '@radix-ui/react-navigation-menu';
import { cn } from '@ui/lib/utils';

type MenuListProps = NavigationMenuListProps & {
  className?: string;
  children: React.ReactNode;
};

export const MenuList = ({ className, children }: MenuListProps) => {
  return (
    <NavigationMenuList
      className={cn(
        'flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6',
        className,
      )}
    >
      {children}
    </NavigationMenuList>
  );
};

MenuList.displayName = 'MenuList';
