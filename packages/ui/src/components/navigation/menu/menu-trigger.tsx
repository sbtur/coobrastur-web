import { NavigationMenuTrigger } from './navigation-menu';

import { NavigationMenuTriggerProps } from '@radix-ui/react-navigation-menu';

type MenuTriggerProps = NavigationMenuTriggerProps & {
  children: React.ReactNode;
};

export const MenuTrigger = ({ children }: MenuTriggerProps) => {
  return (
    <NavigationMenuTrigger className="h-fit font-secondary text-text [.isLight_&]:text-white">
      {children}
    </NavigationMenuTrigger>
  );
};

MenuTrigger.displayName = 'MenuTrigger';
