import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '@ui/components/DataDisplay/Title';

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
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'white',
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

export const White: Story = {
  args: {
    variant: 'white',
    children: 'White Title',
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
    size: 'sm',
    children: 'Small Title',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Title',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Extra Large Title',
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    size: '2xl',
    children: '2XL Title',
  },
};
