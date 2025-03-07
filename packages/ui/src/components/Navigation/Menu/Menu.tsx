import { NavigationMenu } from '@coobrastur/ui/components/navigation-menu';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';

export type MenuProps = NavigationMenuProps & {
  className?: string;
  children: React.ReactNode;
};

export const Menu = ({ className, children }: MenuProps) => {
  return <NavigationMenu className={className}>{children}</NavigationMenu>;
};

Menu.displayName = 'Menu';
