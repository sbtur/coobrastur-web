import { NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuItem } from '@workspace/ui/components/navigation-menu';
import { cn } from '@workspace/ui/lib/utils';

type ItemProps = NavigationMenuItemProps & {
  children: React.ReactNode;
  className?: string;
};

export const Item = ({ className, children }: ItemProps) => {
  return (
    <NavigationMenuItem className={cn('px-4', className)}>
      {children}
    </NavigationMenuItem>
  );
};

Item.displayName = 'MenuItem';
