import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '@workspace/ui/components';

const meta = {
  title: 'Typography/Heading',
  component: Heading.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      description: 'Alignment of the text',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    spacing: {
      description: 'Spacing between the title and text',
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
  },
} satisfies Meta<typeof Heading.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Heading Title Component',
  },
  render: ({ ...args }) => (
    <Heading.Root {...args}>
      <Heading.Title>Heading Title</Heading.Title>
      <Heading.Text>Heading short description</Heading.Text>
    </Heading.Root>
  ),
};
