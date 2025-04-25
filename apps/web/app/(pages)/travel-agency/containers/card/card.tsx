import { TravelAgency } from '../../types/travel-agency.types';

import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';

export const Card = ({ travelAgency }: { travelAgency: TravelAgency }) => {
  return (
    <div className="w-full bg-background border rounded-2xl space-y-2 p-6 shadow-lg shadow-black/5 hover:shadow-lg transition-all duration-300">
      <Title size="xs">{travelAgency.title}</Title>
      <Text size="sm">{travelAgency.description}</Text>
    </div>
  );
};
