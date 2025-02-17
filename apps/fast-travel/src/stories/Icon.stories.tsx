import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@workspace/ui/components';
import { MdHome } from '@workspace/ui/lib/icons';

const meta = {
  title: 'DataDisplay/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
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
    icon: MdHome,
  },
};

export const Small: Story = {
  args: {
    icon: MdHome,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    icon: MdHome,
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    icon: MdHome,
    size: 'xl',
  },
};

export const Primary: Story = {
  args: {
    icon: MdHome,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    icon: MdHome,
    variant: 'secondary',
  },
};

export const Neutral: Story = {
  args: {
    icon: MdHome,
    variant: 'neutral',
  },
};

export const White: Story = {
  args: {
    icon: MdHome,
    variant: 'white',
  },
};
