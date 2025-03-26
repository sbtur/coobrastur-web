import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';

export interface PlanningHeaderProps {
  title: string;
  description: string;
}

export const PlanningHeader = ({ title, description }: PlanningHeaderProps) => {
  return (
    <div className="mb-6 text-center">
      <Title className="mb-2" as="h2">
        {title}
      </Title>
      <Text className="text-gray-600 text-center">{description}</Text>
    </div>
  );
};
