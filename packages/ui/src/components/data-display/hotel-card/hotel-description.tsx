import { cn } from '@ui/lib/utils';

export interface HotelDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const HotelDescription = ({
  children,
  className,
}: HotelDescriptionProps) => {
  return <div className={cn('space-y-2 mt-3', className)}>{children}</div>;
};
