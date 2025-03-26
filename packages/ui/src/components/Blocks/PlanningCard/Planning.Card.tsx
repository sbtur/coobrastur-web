import { cn } from '@ui/lib/utils';
import { Badge } from '@ui/components/DataDisplay/Badge';
import { Check } from '@ui/lib/icons';

export interface PlanningCardProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  isSelected?: boolean;
}

export const PlanningCard = ({
  children,
  className,
  badge,
  isSelected,
}: PlanningCardProps) => {
  return (
    <div
      className={cn(
        'group relative flex w-full max-w-sm flex-col overflow-hidden rounded-xl bg-white p-6',
        className,
      )}
    >
      <div className="absolute right-4 top-4">
        <div
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full border',
            isSelected ? 'bg-blue-500' : 'border-gray-200 bg-white',
          )}
        >
          {isSelected && <Check className="h-5 w-5 text-white" />}
        </div>
      </div>
      {badge && (
        <div className="mb-4 flex justify-center">
          <Badge variant="neutral">{badge}</Badge>
        </div>
      )}
      {children}
    </div>
  );
};
