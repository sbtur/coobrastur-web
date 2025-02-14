import type { Meta, StoryObj } from '@storybook/react';
import { Badge, Icon } from '@workspace/ui/components';
import { MD } from '@workspace/ui/lib/icons';

const meta = {
  title: 'DataDisplay/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'HOTÉIS',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'HOTÉIS',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'HOTÉIS',
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
        <Icon icon={MD.MdHotel} className='mr-1 h-4 w-4' />
        HOTÉIS
      </>
    ),
  },
};
