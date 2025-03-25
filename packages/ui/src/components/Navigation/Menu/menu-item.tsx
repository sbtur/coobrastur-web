import { NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuItem } from '@ui/components/navigation-menu';
import { cn } from '@ui/lib/utils';

type MenuItemProps = NavigationMenuItemProps & {
  children: React.ReactNode;
  className?: string;
};

export const MenuItem = ({ className, children }: MenuItemProps) => {
  return (
    <NavigationMenuItem className={cn('text-nowrap !space-x-0', className)}>
      {children}
    </NavigationMenuItem>
  );
};

MenuItem.displayName = 'MenuItem';
