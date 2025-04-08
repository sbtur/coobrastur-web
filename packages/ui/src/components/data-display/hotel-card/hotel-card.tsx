import { cn } from '@ui/lib/utils';

export interface HotelCardProps {
  children: React.ReactNode;
  className?: string;
}

export const HotelCard = ({ children, className }: HotelCardProps) => {
  return (
    <div
      className={cn(
        'group relative flex flex-col h-full w-full gap-4 max-w-md overflow-hidden rounded-xl bg-white transition-all',
        className,
      )}
    >
      {children}
    </div>
  );
};

HotelCard.displayName = 'HotelCard';
