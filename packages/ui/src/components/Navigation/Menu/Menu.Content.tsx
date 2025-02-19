import { NavigationMenuContent } from '@workspace/ui/components/navigation-menu';

import { NavigationMenuContentProps } from '@radix-ui/react-navigation-menu';

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
