import { forwardRef } from 'react';

import { List } from '@radix-ui/react-navigation-menu';
import { cn } from '@ui/lib/utils';

export const NavigationMenuDropdown = forwardRef<
  React.ElementRef<typeof List>,
  React.ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
  <List
    ref={ref}
    className={cn('group grid w-[400px] py-5 px-4', className)}
    {...props}
  />
));

NavigationMenuDropdown.displayName = 'NavigationMenuDropdown';
