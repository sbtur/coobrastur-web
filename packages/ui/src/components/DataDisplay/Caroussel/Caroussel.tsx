import { forwardRef, ReactNode } from 'react';

import { cn } from '@workspace/ui/lib/utils';

export interface CarousselProps {
  children: ReactNode;
  className?: string;
}

export const Caroussel = forwardRef<HTMLDivElement, CarousselProps>(
  ({ children, className }, ref) => {
    return (
      <div className={cn('relative', className)} ref={ref}>
        {children}
      </div>
    );
  },
);

Caroussel.displayName = 'Caroussel';
