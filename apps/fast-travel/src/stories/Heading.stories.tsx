import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@ui/components/DataDisplay/Heading';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';

const meta = {
  title: 'DataDisplay/Heading',
  component: Heading,
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
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    align: 'left',
  },
  render: ({ ...args }) => (
    <Heading {...args}>
      <Title>Default Heading</Title>
      <Text>Default Text</Text>
    </Heading>
  ),
};

export const Center: Story = {
  args: {
    align: 'center',
  },
  render: ({ ...args }) => (
    <Heading>
      <Title>Center Heading</Title>
      <Text>Center Text</Text>
    </Heading>
  ),
};

export const Right: Story = {
  args: {
    align: 'right',
  },
  render: ({ ...args }) => (
    <Heading {...args}>
      <Title>Right Heading</Title>
      <Text>Right Text</Text>
    </Heading>
  ),
};
