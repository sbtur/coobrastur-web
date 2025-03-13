import { Advantage } from '../../types/advantage.types';

import { Icon } from '@ui/components/DataDisplay/Icon';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';

export const Card = ({ advantage }: { advantage: Advantage }) => {
  return (
    <div className="w-full bg-background border rounded-2xl space-y-2 p-6 shadow-md shadow-black/5 hover:shadow-lg transition-all duration-300">
      <div className="w-10 h-10 bg-secondary-100 rounded-md flex items-center justify-center">
        <Icon icon={advantage.icon} variant="primary" />
      </div>
      <Title size="xs">{advantage.title}</Title>
      <Text size="sm">{advantage.description}</Text>
    </div>
  );
};
