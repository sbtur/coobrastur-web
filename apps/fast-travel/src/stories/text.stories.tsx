import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@ui/components/data-display/text';

const meta = {
  title: 'DataDisplay/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['base', 'featured', 'success', 'warning', 'danger'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default text example',
  },
};

export const Featured: Story = {
  args: {
    variant: 'featured',
    children: 'Featured text example',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success text example',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning text example',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger text example',
  },
};
export const Bold: Story = {
  args: {
    children: 'Bold text example',
  },
};

export const Semibold: Story = {
  args: {
    children: 'Semibold text example',
  },
};
