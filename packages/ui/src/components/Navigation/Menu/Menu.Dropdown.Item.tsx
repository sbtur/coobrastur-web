import { NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuItem } from '@ui/components/navigation-menu';
import { cn } from '@ui/lib/utils';

type DropdownItemProps = NavigationMenuItemProps & {
  children: React.ReactNode;
  className?: string;
};

export const DropdownItem = ({ className, children }: DropdownItemProps) => {
  return (
    <NavigationMenuItem className={cn('p-1', className)}>
      {children}
    </NavigationMenuItem>
  );
};

DropdownItem.displayName = 'DropdownItem';
