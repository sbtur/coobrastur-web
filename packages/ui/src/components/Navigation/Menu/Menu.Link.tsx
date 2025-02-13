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
        'font-secondary text-white hover:text-primary-hover focus:text-primary-focus cursor-pointer',
        className
      )}
    >
      {children}
    </NavigationMenuLink>
  );
};

Link.displayName = 'MenuLink';
