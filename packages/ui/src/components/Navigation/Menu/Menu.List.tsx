import { NavigationMenuList } from '@workspace/ui/components/navigation-menu';
import { cn } from '@workspace/ui/lib/utils';

import { NavigationMenuListProps } from '@radix-ui/react-navigation-menu';

type ListProps = NavigationMenuListProps & {
  className?: string;
  children: React.ReactNode;
};

export const List = ({ className, children }: ListProps) => {
  return (
    <NavigationMenuList
      className={cn('flex space-x-6 lg:space-x-3', className)}
    >
      {children}
    </NavigationMenuList>
  );
};

List.displayName = 'MenuList';
