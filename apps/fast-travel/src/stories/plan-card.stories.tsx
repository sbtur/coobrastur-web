import { Badge } from '@coobrastur/ui/components/data-display/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@coobrastur/ui/components/data-display/card';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Label } from '@coobrastur/ui/components/data-entry/label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@coobrastur/ui/components/data-entry/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@coobrastur/ui/components/data-entry/select';
import { ArrowRight } from '@coobrastur/ui/lib/icons';
import { cn } from '@coobrastur/ui/lib/utils';

import type { Meta, StoryObj } from '@storybook/react';

const planOptions = [
  {
    id: 'vip',
    title: 'Plano VIP',
    description:
      'Plano ideal para viagens em <strong>baixa temporada</strong>.',
  },
  {
    id: 'master',
    title: 'Plano Master',
    description:
      'Plano flexível para viajar <strong>durante o ano todo</strong>.',
  },
];

const DAILIES_OPTIONS = [
  {
    value: '7',
    label: '7 diárias',
  },
  {
    value: '14',
    label: '14 diárias',
  },
  {
    value: '21',
    label: '21 diárias',
  },
  {
    value: '28',
    label: '28 diárias',
  },
];

interface PlanOption {
  id: string;
  title: string;
  description: string;
}

interface RadioPlanProps {
  options: PlanOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const RadioPlan = ({
  options,
  defaultValue,
  onChange,
}: RadioPlanProps) => {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      onValueChange={onChange}
      className="space-y-2"
    >
      {options.map(option => (
        <Label
          key={option.id}
          htmlFor={option.id}
          className={cn(
            'flex cursor-pointer items-center rounded-[10px] border-2 p-4  hover:border-highlight',
            `${option.id === defaultValue ? 'border-highlight' : 'border-input'}`,
          )}
        >
          <RadioGroupItem
            value={option.id}
            id={option.id}
            className="w-6 h-6 mr-4 hover:bg-transparent"
          />
          <div>
            <div className="text-base font-bold font-primary">
              {option.title}
            </div>
            <div className="text-sm text-text-body">
              <div dangerouslySetInnerHTML={{ __html: option.description }} />
            </div>
          </div>
        </Label>
      ))}
    </RadioGroup>
  );
};
export const PlanCard = () => {
  return (
    <Card className="max-w-md">
      <CardHeader className="px-10 relative">
        <div className="absolute top-4 right-4">
          <RadioGroup onValueChange={() => {}}>
            <RadioGroupItem value="silver" id="silver" className="w-9 h-9" />
          </RadioGroup>
        </div>
        <Badge>Silver</Badge>
        <CardTitle className="text-2xl text-primary font-primary">
          Categoria Silver
        </CardTitle>
        <Text>Selecione abaixo o período do ano em que deseja viajar:</Text>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioPlan options={planOptions} defaultValue="vip" />

        <div className="space-y-2">
          <Label
            htmlFor="dailies"
            className="text-primary font-bold font-primary"
          >
            Número de diárias:
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o número de diárias..." />
            </SelectTrigger>
            <SelectContent>
              {DAILIES_OPTIONS.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold text-navy-800">223,90</span>
            <span className="text-gray-600 ml-1">/ Por mês</span>
          </div>

          <Button className="w-full rounded-[10px]" size="lg">
            Assine agora <Icon icon={ArrowRight} variant="white" />
          </Button>

          <a
            href="https://wa.me/"
            className="block text-center text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Fale com um consultor no WhatsApp
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const meta = {
  title: 'Data Display/Plan Card',
  component: PlanCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PlanCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Basic Plan',
    description: 'Perfect for getting started',
    price: 'R$ 29,90',
    features: [
      'Up to 5 users',
      'Basic support',
      '10GB storage',
      'Basic analytics',
    ],
    buttonText: 'Get Started',
  },
};
