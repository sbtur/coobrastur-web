import type { Meta, StoryObj } from '@storybook/react';
import { PlanningCard } from '@ui/components/Blocks/PlanningCard';
import { Badge } from '@ui/components/DataDisplay/Badge';
import { Heading } from '@ui/components/DataDisplay/Heading';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { Button } from '@ui/components/DataEntry/Button';
import { Label } from '@ui/components/DataEntry/Label';
import { Link } from '@ui/components/DataEntry/Link';
import {
  RadioGroup,
  RadioGroupItem,
} from '@ui/components/DataEntry/RadioButton';
import { ArrowRight } from '@ui/lib/icons';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@ui/components/DataEntry/Select';
import { cn } from '@ui/lib/utils';
import { useState, useEffect } from 'react';

type Story = StoryObj<typeof PlanningCardExample>;

const PLANS = [
  {
    id: 1,
    value: 'vip',
    name: 'Plano VIP',
    description: 'Ideal para períodos de baixa temporada.',
  },
  {
    id: 2,
    value: 'master',
    name: 'Plano Master',
    description: 'Ideal para períodos de alta temporada.',
  },
];

const OptionGroup = ({
  children,
  plans,
  defaultValue,
  disabled,
  onPlanChange,
}: {
  children?: React.ReactNode;
  plans: typeof PLANS;
  defaultValue?: string;
  disabled?: boolean;
  onPlanChange?: (value: string) => void;
}) => {
  const [selectedPlan, setSelectedPlan] = useState(defaultValue);

  // Reseta o plano selecionado quando o card for desabilitado
  useEffect(() => {
    if (disabled) {
      setSelectedPlan(undefined);
    } else {
      setSelectedPlan(defaultValue);
    }
  }, [disabled, defaultValue]);

  const handleValueChange = (value: string) => {
    setSelectedPlan(value);
    onPlanChange?.(value);
  };

  return (
    <RadioGroup
      value={selectedPlan}
      onValueChange={handleValueChange}
      disabled={disabled}
    >
      {plans.map(plan => (
        <div
          key={plan.id}
          className={cn(
            'rounded-lg p-4 transition-all bg-white cursor-pointer border-2',
            selectedPlan === plan.value
              ? 'border-highlight-200'
              : 'border-neutral-200',
            disabled && 'opacity-50 cursor-not-allowed',
          )}
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value={plan.value}
              id={plan.value}
              className={cn(
                'h-6 w-6 border-2 transition-colors',
                selectedPlan === plan.value
                  ? 'border-highlight-200'
                  : 'border-neutral-200',
              )}
              disabled={disabled}
            />
            <Label
              htmlFor={plan.value}
              className={cn(
                'flex flex-col cursor-pointer',
                disabled && 'cursor-not-allowed',
              )}
            >
              <span className="font-bold text-primary-200">{plan.name}</span>
              <span className="text-sm text-gray-500">{plan.description}</span>
            </Label>
          </div>
        </div>
      ))}
    </RadioGroup>
  );
};

const PlanningCardExample = () => {
  const [selectedCard, setSelectedCard] = useState<'card1' | 'card2'>('card1');
  const [selectedPlan, setSelectedPlan] = useState<string>('vip');

  const handlePlanChange = (cardId: 'card1' | 'card2', planValue: string) => {
    setSelectedCard(cardId);
    setSelectedPlan(planValue);
  };

  return (
    <div className="flex gap-6">
      <PlanningCard>
        <RadioGroup
          className="relative flex justify-end"
          value={selectedCard}
          onValueChange={value => setSelectedCard(value as 'card1' | 'card2')}
        >
          <RadioGroupItem value="card1" className="h-9 w-9" />
        </RadioGroup>
        <Heading align="left">
          <Badge variant="neutral">SILVER</Badge>
          <Title>Categoria Silver</Title>
          <Text className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{' '}
            <span>consectetur.</span>
          </Text>
        </Heading>

        <OptionGroup
          plans={PLANS}
          defaultValue={selectedCard === 'card1' ? selectedPlan : undefined}
          disabled={selectedCard !== 'card1'}
          onPlanChange={value => handlePlanChange('card1', value)}
        />

        <Title className="text-md text-primary-200 mt-2">
          Número de diárias
        </Title>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o número de diárias" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">1 diária</SelectItem>
              <SelectItem value="2">2 diárias</SelectItem>
              <SelectItem value="3">3 diárias</SelectItem>
              <SelectItem value="4">4 diárias</SelectItem>
              <SelectItem value="5">5 diárias</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Text className="text-md mt-6" align="center">
          <span className="text-primary-200 text-5xl font-bold">223,90</span> /
          Por mês
        </Text>
        <footer className="grid justify-items-center gap-2 mt-6">
          <Button className="w-full" size="lg">
            Assine agora <ArrowRight className="w-4 h-4" />
          </Button>
          <Link href="#" className="text-sm underline text-neutral">
            Converse com um consultor do Clube!
          </Link>
        </footer>
      </PlanningCard>

      <PlanningCard>
        <RadioGroup
          className="relative flex justify-end"
          value={selectedCard}
          onValueChange={value => setSelectedCard(value as 'card1' | 'card2')}
        >
          <RadioGroupItem value="card2" className="h-9 w-9" />
        </RadioGroup>
        <Heading align="left">
          <Badge variant="warning">GOLD</Badge>
          <Title>Categoria Gold</Title>
          <Text className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{' '}
            <span>consectetur.</span>
          </Text>
        </Heading>

        <OptionGroup
          plans={PLANS}
          defaultValue={selectedCard === 'card2' ? selectedPlan : undefined}
          disabled={selectedCard !== 'card2'}
          onPlanChange={value => handlePlanChange('card2', value)}
        />

        <Title className="text-md text-primary-200 mt-2">
          Número de diárias
        </Title>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o número de diárias" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">1 diária</SelectItem>
              <SelectItem value="2">2 diárias</SelectItem>
              <SelectItem value="3">3 diárias</SelectItem>
              <SelectItem value="4">4 diárias</SelectItem>
              <SelectItem value="5">5 diárias</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Text className="text-md mt-6" align="center">
          <span className="text-primary-200 text-5xl font-bold">223,90</span> /
          Por mês
        </Text>
        <footer className="grid justify-items-center gap-2 mt-6">
          <Button className="w-full" size="lg">
            Assine agora <ArrowRight className="w-4 h-4" />
          </Button>
          <Link href="#" className="text-sm underline text-neutral">
            Converse com um consultor do Clube!
          </Link>
        </footer>
      </PlanningCard>
    </div>
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

export const Default: Story = {
  render: () => <PlanningCardExample />,
};

export const Unselect: Story = {
  render: () => (
    <PlanningCard>
      <Heading align="left">
        <Badge variant="neutral">SILVER</Badge>
        <Title>Categoria Silver</Title>
        <Text className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit{' '}
          <span>consectetur.</span>
        </Text>
      </Heading>

      <OptionGroup plans={PLANS} />

      <Title className="text-md text-primary-200 mt-2">Número de diárias</Title>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione o número de diárias" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="1">1 diária</SelectItem>
            <SelectItem value="2">2 diárias</SelectItem>
            <SelectItem value="3">3 diárias</SelectItem>
            <SelectItem value="4">4 diárias</SelectItem>
            <SelectItem value="5">5 diárias</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Text className="text-md mt-6" align="center">
        <span className="text-primary-200 text-5xl font-bold">223,90</span> /
        Por mês
      </Text>
      <footer className="grid justify-items-center gap-2 mt-6">
        <Button className="w-full bg-neutral-300 text-white" size="lg">
          Assine agora <ArrowRight className="w-4 h-4" />
        </Button>
        <Link href="#" className="text-sm underline text-neutral">
          Converse com um consultor do Clube!
        </Link>
      </footer>
    </PlanningCard>
  ),
};
