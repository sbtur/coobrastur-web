import { Heading } from '@workspace/ui/components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'DataDisplay/Heading',
  component: Heading.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    spacing: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
  },
} satisfies Meta<typeof Heading.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    align: 'left',
  },
  render: args => (
    <Heading.Root {...args}>
      <Heading.Title>Default Heading</Heading.Title>
      <Heading.Text>Default Text</Heading.Text>
    </Heading.Root>
  ),
};

export const Center: Story = {
  args: {
    align: 'center',
  },
  render: args => (
    <Heading.Root {...args}>
      <Heading.Title>Center Heading</Heading.Title>
      <Heading.Text>Center Text</Heading.Text>
    </Heading.Root>
  ),
};

export const Right: Story = {
  args: {
    align: 'right',
  },
  render: args => (
    <Heading.Root {...args}>
      <Heading.Title>Right Heading</Heading.Title>
      <Heading.Text>Right Text</Heading.Text>
    </Heading.Root>
  ),
};
