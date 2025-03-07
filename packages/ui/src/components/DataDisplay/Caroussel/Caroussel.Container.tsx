import { forwardRef, ReactNode } from 'react';

import { cn } from '@ui/lib/utils';

export interface CarousselContainerProps {
  children: ReactNode;
  className?: string;
}

export const CarousselContainer = forwardRef<
  HTMLDivElement,
  CarousselContainerProps
>(({ children, className }, ref) => {
  return (
    <div
      className={cn(
        'w-full py-2 overflow-hidden mx-auto relative rounded-2xl',
        className,
      )}
      ref={ref}
    >
      <div className="flex">{children}</div>
    </div>
  );
});

CarousselContainer.displayName = 'CarousselContainer';
