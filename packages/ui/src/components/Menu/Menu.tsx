import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenu } from '@workspace/ui/external/ui/shadcn/navigation-menu';

export type MenuProps = NavigationMenuProps & {
  className?: string;
  children: React.ReactNode;
};

export const Menu = ({ className, children }: MenuProps) => {
  return <NavigationMenu className={className}>{children}</NavigationMenu>;
};

Menu.displayName = 'Menu';
