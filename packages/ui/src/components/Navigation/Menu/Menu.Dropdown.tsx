import { NavigationMenuListProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuList } from '@ui/components/navigation-menu';
import { cn } from '@ui/lib/utils';

type DropdownProps = NavigationMenuListProps & {
  className?: string;
  children: React.ReactNode;
};

export const Dropdown = ({ className, children }: DropdownProps) => {
  return (
    <NavigationMenuList className={cn('grid w-[400px] py-5 px-4', className)}>
      {children}
    </NavigationMenuList>
  );
};

Dropdown.displayName = 'MenuDropdown';
