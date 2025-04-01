import { NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuItem } from '@ui/components/navigation-menu';
import { cn } from '@ui/lib/utils';

type MenuDropdownItemProps = NavigationMenuItemProps & {
  children: React.ReactNode;
  className?: string;
};

export const MenuDropdownItem = ({
  className,
  children,
}: MenuDropdownItemProps) => {
  return (
    <NavigationMenuItem className={cn('p-1', className)}>
      {children}
    </NavigationMenuItem>
  );
};

MenuDropdownItem.displayName = 'MenuDropdownItem';
