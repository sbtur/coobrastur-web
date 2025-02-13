import { NavigationMenuListProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuList } from '@workspace/ui/components/navigation-menu';
import { cn } from '@workspace/ui/lib/utils';

type ListProps = NavigationMenuListProps & {
  className?: string;
  children: React.ReactNode;
};

export const List = ({ className, children }: ListProps) => {
  return (
    <NavigationMenuList className={cn('flex space-x-4', className)}>
      {children}
    </NavigationMenuList>
  );
};

List.displayName = 'MenuList';
