import { NavigationMenuTriggerProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenuTrigger } from '@workspace/ui/components/navigation-menu';

type TriggerProps = NavigationMenuTriggerProps & {
  children: React.ReactNode;
};

export const Trigger = ({ children }: TriggerProps) => {
  return (
    <NavigationMenuTrigger className='font-secondary text-white'>
      {children}
    </NavigationMenuTrigger>
  );
};

Trigger.displayName = 'MenuTrigger';
