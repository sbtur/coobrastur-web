import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@ui/components/data-display/icon';
import { Home } from '@ui/lib/icons';

const meta = {
  title: 'Data Display/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'neutral', 'white'],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Home,
  },
};

export const Small: Story = {
  args: {
    icon: Home,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    icon: Home,
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    icon: Home,
    size: 'xl',
  },
};

export const Primary: Story = {
  args: {
    icon: Home,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    icon: Home,
    variant: 'secondary',
  },
};

export const Neutral: Story = {
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
  args: {
    icon: Home,
    variant: 'neutral',
  },
};

export const White: Story = {
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
  args: {
    icon: Home,
    variant: 'white',
  },
};
