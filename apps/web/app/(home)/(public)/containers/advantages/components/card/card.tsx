import { Advantage } from '../../types/advantage.types';

import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';

export const Card = ({ advantage }: { advantage: Advantage }) => {
  return (
    <div className="w-full bg-background border rounded-2xl space-y-2 p-6 shadow-lg shadow-black/5 hover:shadow-lg transition-all duration-300">
      <div className="w-10 h-10 bg-secondary-100 rounded-md flex items-center justify-center">
        <Icon icon={advantage.icon} variant="primary" size="xl" />
      </div>
      <Title size="xs">{advantage.title}</Title>
      <Text size="sm">{advantage.description}</Text>
    </div>
  );
};
