import { NavigationMenuLink } from '@coobrastur/ui/components/navigation-menu';
import { cn } from '@coobrastur/ui/lib/utils';
import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';

type DropdownLinkProps = NavigationMenuLinkProps & {
  children: React.ReactNode;
  className?: string;
};

export const DropdownLink = ({ className, children }: DropdownLinkProps) => {
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

DropdownLink.displayName = 'DropdownLink';
