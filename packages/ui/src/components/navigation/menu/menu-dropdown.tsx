import { NavigationMenuListProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuList } from '@ui/components/navigation-menu';
import { cn } from '@ui/lib/utils';

type MenuDropdownProps = NavigationMenuListProps & {
  className?: string;
  children: React.ReactNode;
};

export const MenuDropdown = ({ className, children }: MenuDropdownProps) => {
  return (
    <NavigationMenuList className={cn('grid w-[400px] py-5 px-4', className)}>
      {children}
    </NavigationMenuList>
  );
};

MenuDropdown.displayName = 'MenuDropdown';
