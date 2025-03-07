import { NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuItem } from '@ui/components/navigation-menu';
import { cn } from '@ui/lib/utils';

type ItemProps = NavigationMenuItemProps & {
  children: React.ReactNode;
  className?: string;
};

export const Item = ({ className, children }: ItemProps) => {
  return (
    <NavigationMenuItem className={cn('text-nowrap !space-x-0', className)}>
      {children}
    </NavigationMenuItem>
  );
};

Item.displayName = 'MenuItem';
