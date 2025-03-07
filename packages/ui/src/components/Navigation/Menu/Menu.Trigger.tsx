import { NavigationMenuTriggerProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuTrigger } from '@ui/components/navigation-menu';

type TriggerProps = NavigationMenuTriggerProps & {
  children: React.ReactNode;
};

export const Trigger = ({ children }: TriggerProps) => {
  return (
    <NavigationMenuTrigger className="h-fit font-secondary text-text [.isLight_&]:text-white">
      {children}
    </NavigationMenuTrigger>
  );
};

Trigger.displayName = 'MenuTrigger';
