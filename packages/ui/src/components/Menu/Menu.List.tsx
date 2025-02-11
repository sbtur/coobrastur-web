import { NavigationMenuListProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuList } from '../navigation-menu';

type ListProps = NavigationMenuListProps & {
  className?: string;
  children: React.ReactNode;
};

export const List = ({ className, children }: ListProps) => {
  return (
    <NavigationMenuList className={className}>{children}</NavigationMenuList>
  );
};

List.displayName = 'MenuList';
