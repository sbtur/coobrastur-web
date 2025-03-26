import type { Meta, StoryObj } from '@storybook/react';
import {
  PlanningCard,
  PlanningHeader,
  PlanningOption,
  PlanningPrice,
  PlanningButton,
  PlanningOptionGroup,
} from '@ui/components/Blocks/PlanningCard';
import { Text } from '@ui/components/DataDisplay/Text';

type Story = StoryObj<typeof PlanningCardExample>;

const PlanningCardExample = () => {
  return (
    <PlanningCard badge="SILVER" isSelected={true}>
      <PlanningHeader
        title="Categoria Silver"
        description="Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit consectetur."
      />

      <PlanningOptionGroup defaultValue="vip">
        <PlanningOption
          value="vip"
          title="Plano VIP"
          description="Ideal para períodos de baixa temporada."
          isSelected={true}
        />

        <PlanningOption
          value=""
          title="Plano Master"
          description="Ideal para períodos de alta temporada."
          isSelected={false}
        />
      </PlanningOptionGroup>

      <PlanningPrice price={223.9}>
        {/* Aqui entraria o select component */}
      </PlanningPrice>

      <div className="flex flex-col gap-2">
        <PlanningButton type="button" className="w-full" variant="default">
          Assine agora
        </PlanningButton>

        <Text className="text-center text-sm text-gray-500">
          Converse com um consultor do Clube!
        </Text>
      </div>
    </PlanningCard>
  );
};

const meta: Meta<typeof PlanningCardExample> = {
  title: 'Blocks/PlanningCard',
  component: PlanningCardExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: Story = {};

export const Unselected: Story = {
  render: () => (
    <PlanningCard badge="GOLD" isSelected={false}>
      <PlanningHeader
        title="Categoria Gold"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur."
      />

      <PlanningOptionGroup>
        <PlanningOption
          value="vip"
          title="Plano VIP"
          description="Ideal para períodos de baixa temporada."
          isSelected={false}
        />

        <PlanningOption
          value="master"
          title="Plano Master"
          description="Ideal para períodos de alta temporada."
          isSelected={false}
        />
      </PlanningOptionGroup>

      <PlanningPrice price={223.9} className="mb-6">
        {/* Aqui entraria o select component */}
      </PlanningPrice>

      <div className="flex flex-col gap-2">
        <PlanningButton
          type="button"
          className="w-full"
          disabledClassName="bg-gray-200 hover:bg-gray-200 text-white"
          disabled
        >
          Assine agora →
        </PlanningButton>

        <Text className="text-center text-sm text-gray-500">
          Converse com um consultor do Clube!
        </Text>
      </div>
    </PlanningCard>
  ),
};
