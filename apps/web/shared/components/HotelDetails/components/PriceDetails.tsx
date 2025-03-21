import { Text } from '@ui/components/DataDisplay/Text';

interface PriceDetailsProps {
  additionalPrice: number;
  availableDays: number;
}

export const PriceDetails = ({
  additionalPrice,
  availableDays,
}: PriceDetailsProps) => {
  return (
    <div className={`flex ${additionalPrice > 0 ? 'flex-col' : ''}`}>
      <Text size="lg" className="font-bold text-highlight flex items-center">
        {availableDays} {availableDays === 1 ? 'Diária' : 'Diárias'}
      </Text>

      {additionalPrice > 0 && (
        <Text size="sm" className="text-gray-500">
          R$ {additionalPrice}{' '}
          <span className="text-gray-700 font-bold">adicionais</span>
        </Text>
      )}
    </div>
  );
};
