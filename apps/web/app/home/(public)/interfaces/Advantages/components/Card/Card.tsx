import { Icon, IconProps, Text, Title } from '@workspace/ui/components';

interface Advantage {
  icon: IconProps['icon'];
  title: string;
  description: string;
}

export const Card = ({ advantage }: { advantage: Advantage }) => {
  return (
    <div className="w-[290] h-[195] bg-background border rounded-2xl space-y-2 p-6 shadow-md shadow-black/5 hover:shadow-lg transition-all duration-300">
      <div className="w-10 h-10 bg-secondary-100 rounded-md flex items-center justify-center">
        <Icon icon={advantage.icon} variant="primary" />
      </div>
      <Title size="xs">{advantage.title}</Title>
      <Text size="sm">{advantage.description}</Text>
    </div>
  );
};
