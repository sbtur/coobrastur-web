import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuLink } from '@workspace/ui/components/navigation-menu';
import { cn } from '@workspace/ui/lib/utils';

type DropdownLinkProps = NavigationMenuLinkProps & {
  children: React.ReactNode;
  className?: string;
};

export const DropdownLink = ({ className, children }: DropdownLinkProps) => {
  return (
    <NavigationMenuLink
      className={cn(
        'block select-none space-y-1 rounded p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 hover:text-neutral-900 hover:cursor-pointer focus:bg-neutral-100 focus:text-neutral-900 [.isLight_&]:text-white',
        className
      )}
    >
      {children}
    </NavigationMenuLink>
  );
};

DropdownLink.displayName = 'DropdownLink';
