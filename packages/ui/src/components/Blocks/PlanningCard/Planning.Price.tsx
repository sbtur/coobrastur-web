import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { Select } from '@ui/components/DataEntry/Select';
import { cn } from '@ui/lib/utils';

export interface PlanningPriceProps {
  price: number;
  period?: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export const PlanningPrice = ({
  price,
  period = '/ Por mês',
  title = 'Número de diárias:',
  children,
  className,
}: PlanningPriceProps) => {
  return (
    <div className={cn('space-y-4 mb-4', className)}>
      <div className="mb-4">
        <Title as="h3" size="xs" className="mb-2">
          {title}
        </Title>
        {children}
      </div>

      <div>
        <div>
          <Select>
            <option value="">Selecione o número de diárias</option>
          </Select>
        </div>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-1">
          <Text className="text-3xl font-bold text-navy-700">
            {price.toFixed(2).replace('.', ',')}
          </Text>
          <Text className="text-gray-600">{period}</Text>
        </div>
      </div>
    </div>
  );
};
