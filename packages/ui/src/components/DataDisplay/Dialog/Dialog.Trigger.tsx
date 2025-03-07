import { DialogTrigger } from '@coobrastur/ui/components/dialog';
import { DialogTriggerProps } from '@radix-ui/react-dialog';

export interface TriggerProps extends DialogTriggerProps {
  children: React.ReactNode;
}

export const Trigger = ({ children, ...props }: TriggerProps) => {
  return <DialogTrigger {...props}>{children}</DialogTrigger>;
};

Trigger.displayName = 'DialogTrigger';
