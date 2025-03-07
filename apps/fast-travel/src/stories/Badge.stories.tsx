import { Badge } from '@coobrastur/ui/components/DataDisplay/Badge';
import { Icon } from '@coobrastur/ui/components/DataDisplay/Icon';
import { Hotel } from '@coobrastur/ui/lib/icons';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'DataDisplay/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'HOTÉIS',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'DISPONÍVEL',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'INDISPONÍVEL',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'PENDENTE',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Icon icon={Hotel} variant="secondary" className="mr-1 h-4 w-4" />
        HOTÉIS
      </>
    ),
  },
};
