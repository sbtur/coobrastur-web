import { cn } from '@workspace/ui/lib/utils';
import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuLink } from '@workspace/ui/components/navigation-menu';

type LinkProps = NavigationMenuLinkProps & {
  children: React.ReactNode;
  className?: string;
};

export const Link = ({ className, children }: LinkProps) => {
  return (
    <NavigationMenuLink
      className={cn(
        'font-secondary text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 cursor-pointer [.isLight_&]:text-white',
        className
      )}
    >
      {children}
    </NavigationMenuLink>
  );
};

Link.displayName = 'MenuLink';
