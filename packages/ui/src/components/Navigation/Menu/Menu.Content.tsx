import { NavigationMenuContentProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuContent } from '@ui/components/navigation-menu';

type ContentProps = NavigationMenuContentProps & {
  className?: string;
  children: React.ReactNode;
};

export const Content = ({ className, children }: ContentProps) => {
  return (
    <NavigationMenuContent className={className}>
      {children}
    </NavigationMenuContent>
  );
};

Content.displayName = 'MenuContent';
