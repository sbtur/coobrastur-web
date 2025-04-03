import { cn } from '@ui/lib/utils';
import {
  RadioGroup,
  RadioGroupItem,
} from '@ui/components/DataEntry/RadioButton';

export interface PlanningCardProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  isSelected?: boolean;
}

export const PlanningCard = ({ children, isSelected }: PlanningCardProps) => {
  return (
    <div
      className={cn(
        'group relative w-full max-w-sm overflow-hidden rounded-[20px] bg-white p-4 shadow-xl',
      )}
    >
      {/* <div className="relative flex justify-end">
        <>
          <RadioGroup defaultValue="vip">
            <RadioGroupItem
              value={isSelected ? 'selected' : 'notSelected'}
              className="h-9 w-9"
            />
          </RadioGroup>
        </>
      </div> */}
      {children}
    </div>
  );
};
