import { ReactNode } from 'react';

import { cn } from '@workspace/ui/lib/utils';

export interface CarousselItemProps {
  children: ReactNode;
  className?: string;
}

export const CarousselItem = ({
  children,
  className,
  ...props
}: CarousselItemProps) => {
  return (
    <div className={cn('rounded-2xl pl-2', className)} {...props}>
      {children}
    </div>
  );
};

CarousselItem.displayName = 'CarousselItem';
