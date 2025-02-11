import { NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuItem } from '../navigation-menu';

type ItemProps = NavigationMenuItemProps & {
  children: React.ReactNode;
  className?: string;
};

export const Item = ({ className, children }: ItemProps) => {
  return (
    <NavigationMenuItem className={className}>{children}</NavigationMenuItem>
  );
};

Item.displayName = 'MenuItem';
