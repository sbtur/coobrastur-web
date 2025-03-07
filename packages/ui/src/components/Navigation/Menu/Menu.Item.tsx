import { NavigationMenuItem } from '@coobrastur/ui/components/navigation-menu';
import { cn } from '@coobrastur/ui/lib/utils';
import { NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';

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
