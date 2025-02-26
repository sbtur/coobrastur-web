import { NavigationMenuItem } from '@workspace/ui/components/navigation-menu';
import { cn } from '@workspace/ui/lib/utils';

import { NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';

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
