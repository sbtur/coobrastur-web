import { NavigationMenuContent } from './navigation-menu';

import { NavigationMenuContentProps } from '@radix-ui/react-navigation-menu';

type MenuContentProps = NavigationMenuContentProps & {
  className?: string;
  children: React.ReactNode;
};

export const MenuContent = ({ className, children }: MenuContentProps) => {
  return (
    <NavigationMenuContent className={className}>
      {children}
    </NavigationMenuContent>
  );
};

MenuContent.displayName = 'MenuContent';
