import { Title } from '@workspace/ui/components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'DataDisplay/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge', '2xlarge'],
    },
    variant: {
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
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Title',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Title',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'Neutral Title',
  },
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Title',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Title',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Title',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Title',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Title',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xlarge',
    children: 'Extra Large Title',
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    size: '2xlarge',
    children: '2XL Title',
  },
};
