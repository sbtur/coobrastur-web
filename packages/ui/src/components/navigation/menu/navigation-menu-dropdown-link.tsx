import { NavigationMenuLink } from './navigation-menu';

import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import { cn } from '@ui/lib/utils';

type NavigationMenuDropdownLinkProps = NavigationMenuLinkProps & {
  children: React.ReactNode;
  className?: string;
};

export const NavigationMenuDropdownLink = ({
  className,
  children,
}: NavigationMenuDropdownLinkProps) => {
  return (
    <NavigationMenuLink
      className={cn(
        'block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100/50 hover:text-neutral hover:cursor-pointer focus:bg-neutral focus:text-neutral [.isLight_&]:text-white',
        className,
      )}
    >
      {children}
    </NavigationMenuLink>
  );
};

NavigationMenuDropdownLink.displayName = 'NavigationMenuDropdownLink';
