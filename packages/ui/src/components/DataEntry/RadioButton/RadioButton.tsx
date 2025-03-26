import { cn } from '@ui/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Check } from '@ui/lib/icons';

export interface RadioButtonProps {
  id?: string;
  name?: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
}

export const RadioButton = ({
  id,
  name,
  value,
  checked,
  disabled,
  className,
  onChange,
  children,
  ...props
}: RadioButtonProps) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupPrimitive.Item
        id={id}
        value={value}
        disabled={disabled}
        className={cn(
          'h-7 w-7 rounded-full border border-gray-200 text-white-500 focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
            <Check className="h-4 w-4 text-white" />
          </div>
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {children && (
        <label
          htmlFor={id}
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            disabled && 'cursor-not-allowed opacity-70',
          )}
        >
          {children}
        </label>
      )}
    </div>
  );
};
