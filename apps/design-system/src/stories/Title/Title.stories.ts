import type { Meta, StoryObj } from '@storybook/react';

import { Title } from '@workspace/ui/components';

const meta = {
  title: 'Typography/Title',
  component: Title,
  argTypes: {
    as: {
      description: 'HTML element to be rendered',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
      description: 'Size of the title',
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge', '2xlarge'],
    },
    variant: {
      description: 'Color of the title',
      control: 'select',
      options: [
        'primary',
        'secondary',
        'neutral',
        'success',
        'warning',
        'danger',
      ],
    },
  },
  args: {
    children: 'Viaje mais todos os anos!',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
