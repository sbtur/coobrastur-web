import { NavigationMenuContentProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuContent } from '@ui/components/navigation-menu';

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
