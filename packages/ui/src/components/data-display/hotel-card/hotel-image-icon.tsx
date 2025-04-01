import { ReactNode } from 'react';

import { cn } from '@ui/lib/utils';

export interface HotelImageIconProps {
  children: ReactNode;
  className?: string;
}

export const HotelImageIcon = ({
  children,
  className,
}: HotelImageIconProps) => {
  return (
    <div
      className={cn(
        'absolute left-0 top-0 z-10 p-4 flex gap-4 flex-wrap',
        className,
      )}
    >
      {children}
    </div>
  );
};
