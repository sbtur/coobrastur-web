import { NavigationMenuLink } from '@workspace/ui/components/navigation-menu';
import { cn } from '@workspace/ui/lib/utils';

import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';

type LinkProps = NavigationMenuLinkProps & {
  children: React.ReactNode;
  className?: string;
};

export const Link = ({ className, children }: LinkProps) => {
  return (
    <NavigationMenuLink
      className={cn(
        'font-secondary text-text cursor-pointer [.isLight_&]:text-white',
        className,
      )}
    >
      {children}
    </NavigationMenuLink>
  );
};

Link.displayName = 'MenuLink';
