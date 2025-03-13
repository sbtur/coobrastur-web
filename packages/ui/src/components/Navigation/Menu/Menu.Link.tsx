import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuLink } from '@ui/components/navigation-menu';
import { cn } from '@ui/lib/utils';

type LinkProps = NavigationMenuLinkProps & {
  children: React.ReactNode;
  className?: string;
};

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <NavigationMenuLink
      className={cn(
        'font-secondary text-text cursor-pointer [.isLight_&]:text-white',
        className,
      )}
      {...props}
    >
      {children}
    </NavigationMenuLink>
  );
};

Link.displayName = 'MenuLink';
