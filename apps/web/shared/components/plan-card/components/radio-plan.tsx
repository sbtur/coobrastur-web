import { Label } from '@coobrastur/ui/components/data-entry/label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@coobrastur/ui/components/data-entry/radio-group';
import { cn } from '@coobrastur/ui/lib/utils';

interface PlanOption {
  id: number;
  value: string;
  name: string;
  description: string;
}

interface RadioPlanProps {
  options: PlanOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}
export const RadioPlan = ({
  options,
  defaultValue,
  onChange,
}: RadioPlanProps) => {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      onValueChange={onChange}
      className="space-y-2"
    >
      {options.map(option => (
        <Label
          key={option.id}
          htmlFor={option.value}
          className={cn(
            'flex cursor-pointer items-center rounded-[10px] border-2 p-4  hover:border-highlight',
            `${option.value === defaultValue ? 'border-highlight' : 'border-input'}`,
          )}
        >
          <RadioGroupItem
            value={option.value}
            id={option.value}
            className="w-6 h-6 mr-4 hover:bg-transparent"
          />
          <div>
            <div className="text-base font-bold font-primary">
              {option.name}
            </div>
            <div className="text-sm text-text-body">
              <div dangerouslySetInnerHTML={{ __html: option.description }} />
            </div>
          </div>
        </Label>
      ))}
    </RadioGroup>
  );
};
