import { NavigationMenuListProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuList } from '@ui/components/navigation-menu';
import { cn } from '@ui/lib/utils';

type ListProps = NavigationMenuListProps & {
  className?: string;
  children: React.ReactNode;
};

export const List = ({ className, children }: ListProps) => {
  return (
    <NavigationMenuList
      className={cn(
        'flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6',
        className,
      )}
    >
      {children}
    </NavigationMenuList>
  );
};

List.displayName = 'MenuList';
