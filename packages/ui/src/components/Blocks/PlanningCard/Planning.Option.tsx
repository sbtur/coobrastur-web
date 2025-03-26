import { cn } from '@ui/lib/utils';
import { Text } from '@ui/components/DataDisplay/Text';
import { RadioButton } from '@ui/components/DataEntry/RadioButton';
import * as RadioGroup from '@radix-ui/react-radio-group';

export interface PlanningOptionProps {
  title: string;
  description: string;
  isSelected?: boolean;
  value: string;
  onChange?: (value: string) => void;
}

export const PlanningOption = ({
  title,
  description,
  isSelected,
  value,
  onChange,
}: PlanningOptionProps) => {
  return (
    <div
      className={cn(
        'mb-2 rounded-lg p-4 transition-all',
        isSelected
          ? 'border-2 border-blue-500 bg-gray-50'
          : 'border border-gray-200',
      )}
    >
      <RadioButton value={value}>
        <div className="flex flex-col">
          <Text className="font-semibold text-navy-600">{title}</Text>
          <Text className="text-sm text-gray-400">{description}</Text>
        </div>
      </RadioButton>
    </div>
  );
};

// Componente wrapper para gerenciar o grupo de radio buttons
export const PlanningOptionGroup = ({
  children,
  defaultValue,
  onChange,
}: {
  children: React.ReactNode;
  defaultValue?: string;
  onChange?: (value: string) => void;
}) => {
  return (
    <RadioGroup.Root defaultValue={defaultValue} onValueChange={onChange}>
      {children}
    </RadioGroup.Root>
  );
};
