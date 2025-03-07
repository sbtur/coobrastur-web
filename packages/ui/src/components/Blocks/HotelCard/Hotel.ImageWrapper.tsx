import { ReactNode } from 'react';

import { cn } from '@ui/lib/utils';

export interface HotelImageWrapperProps {
  children: ReactNode;
  className?: string;
}

export const HotelImageWrapper = ({
  children,
  className,
}: HotelImageWrapperProps) => {
  return (
    <div
      className={cn(
        'relative w-full h-full overflow-hidden rounded-xl',
        className,
      )}
    >
      {children}
    </div>
  );
};
