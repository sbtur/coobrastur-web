import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuLink } from '@ui/components/navigation-menu';
import { cn } from '@ui/lib/utils';

type MenuLinkProps = NavigationMenuLinkProps & {
  children: React.ReactNode;
  className?: string;
};

export const MenuLink = ({ className, children, ...props }: MenuLinkProps) => {
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

MenuLink.displayName = 'MenuLink';
