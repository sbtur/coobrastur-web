import { NavigationMenuList } from '@workspace/ui/components/navigation-menu';
import { cn } from '@workspace/ui/lib/utils';

import { NavigationMenuListProps } from '@radix-ui/react-navigation-menu';

type DropdownProps = NavigationMenuListProps & {
  className?: string;
  children: React.ReactNode;
};

export const Dropdown = ({ className, children }: DropdownProps) => {
  return (
    <NavigationMenuList
      className={cn(
        'grid w-[300px] gap-3 py-4 px-2 md:w-[400px] lg:grid-cols-2 lg:w-[500px]',
        className
      )}
    >
      {children}
    </NavigationMenuList>
  );
};

Dropdown.displayName = 'MenuDropdown';
