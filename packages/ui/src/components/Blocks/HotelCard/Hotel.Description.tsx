import { cn } from '@coobrastur/ui/lib/utils';

export interface HotelDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const HotelDescription = ({
  children,
  className,
}: HotelDescriptionProps) => {
  return (
    <div className={cn('flex flex-col gap-2 p-4', className)}>{children}</div>
  );
};
