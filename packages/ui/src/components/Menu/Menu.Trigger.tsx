import { NavigationMenuTriggerProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuTrigger } from '@workspace/ui/external/ui/shadcn/navigation-menu';

type TriggerProps = NavigationMenuTriggerProps & {
  className?: string;
  children: React.ReactNode;
};

export const Trigger = ({ className, children }: TriggerProps) => {
  return (
    <NavigationMenuTrigger className={className}>
      {children}
    </NavigationMenuTrigger>
  );
};

Trigger.displayName = 'MenuTrigger';
