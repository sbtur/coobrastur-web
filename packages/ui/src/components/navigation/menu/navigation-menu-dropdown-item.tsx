import {
  NavigationMenuItem,
  NavigationMenuItemProps,
} from '@radix-ui/react-navigation-menu';
import { cn } from '@ui/lib/utils';

type NavigationMenuDropdownItemProps = NavigationMenuItemProps & {
  children: React.ReactNode;
  className?: string;
};

export const NavigationMenuDropdownItem = ({
  className,
  children,
}: NavigationMenuDropdownItemProps) => {
  return (
    <NavigationMenuItem className={cn('p-1', className)}>
      {children}
    </NavigationMenuItem>
  );
};

NavigationMenuDropdownItem.displayName = 'NavigationMenuDropdownItem';
