import { NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuItem } from '@workspace/ui/components/navigation-menu';
import { cn } from '@workspace/ui/lib/utils';

type DropdownItemProps = NavigationMenuItemProps & {
  children: React.ReactNode;
  className?: string;
};

export const DropdownItem = ({ className, children }: DropdownItemProps) => {
  return (
    <NavigationMenuItem className={cn('p-2', className)}>
      {children}
    </NavigationMenuItem>
  );
};

DropdownItem.displayName = 'DropdownItem';
