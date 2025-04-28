import { Text } from '@ui/components/data-display/text';

interface AdditionalFees {
  description: string;
  value: number;
}

export function AditionalFees({ description, value }: AdditionalFees) {
  return (
    <div className="flex justify-between items-center">
      <Text size="sm" className="text-neutral-500">
        {description}
      </Text>
      <Text size="sm">
        R${' '}
        {value.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>
    </div>
  );
}
