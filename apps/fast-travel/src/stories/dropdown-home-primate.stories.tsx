import { Dropdown } from '../../../web/app/(home)/(private)/containers/dropdown';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'HomePrivate/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const plans = [
  {
    id: '1',
    name: 'Silver Master',
    type: 'silver',
    badges: [
      { type: 'warning' as const, label: 'Gold' },
      { type: 'neutral' as const, label: 'Master' },
    ],
    days: 7,
    validity: {
      start: '01/09/2023',
      end: '31/08/2026',
    },
    installment: {
      year: 1,
      number: 6,
    },
  },
  // ... mais planos
];

export const Default: Story = {
  args: {
    plans,
  },
};
