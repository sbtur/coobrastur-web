import { NavigationMenuList } from '@coobrastur/ui/components/navigation-menu';
import { cn } from '@coobrastur/ui/lib/utils';
import { NavigationMenuListProps } from '@radix-ui/react-navigation-menu';

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
