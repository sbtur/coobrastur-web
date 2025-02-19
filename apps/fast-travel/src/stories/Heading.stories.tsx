import { Heading } from '@workspace/ui/components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'DataDisplay/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      defaultValue: 1,
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'muted'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: 1,
    children: 'Heading Level 1',
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: 'Heading Level 2',
  },
};

export const H3: Story = {
  args: {
    level: 3,
    children: 'Heading Level 3',
  },
};

export const H4: Story = {
  args: {
    level: 4,
    children: 'Heading Level 4',
  },
};

export const H5: Story = {
  args: {
    level: 5,
    children: 'Heading Level 5',
  },
};

export const H6: Story = {
  args: {
    level: 6,
    children: 'Heading Level 6',
  },
};

export const Primary: Story = {
  args: {
    level: 1,
    variant: 'primary',
    children: 'Primary Heading',
  },
};

export const Secondary: Story = {
  args: {
    level: 1,
    variant: 'secondary',
    children: 'Secondary Heading',
  },
};

export const Bold: Story = {
  args: {
    level: 1,
    weight: 'bold',
    children: 'Bold Heading',
  },
};
