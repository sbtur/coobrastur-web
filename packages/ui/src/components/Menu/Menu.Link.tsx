import { cn } from '@workspace/ui/lib/utils';
import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuLink } from '../navigation-menu';

type LinkProps = NavigationMenuLinkProps & {
  children: React.ReactNode;
  className?: string;
};

export const Link = ({ className, children }: LinkProps) => {
  return (
    <NavigationMenuLink className={className}>{children}</NavigationMenuLink>
  );
};

Link.displayName = 'MenuLink';
