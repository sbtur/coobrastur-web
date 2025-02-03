import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@workspace/ui/components';

const meta = {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    size: {
      description: 'Size of the text',
      control: 'select',
      options: ['xsmall', 'small', 'base', 'large', 'xlarge'],
    },
    spacing: {
      description: 'Spacing of the text',
      control: 'select',
      options: ['small', 'normal', 'large'],
    },
    weight: {
      description: 'Weight of the text',
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    align: {
      description: 'Alignment of the text',
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    variant: {
      description: 'Color of the text',
      control: 'select',
      options: ['base', 'featured', 'success', 'warning', 'danger'],
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue dolor eu faucibus euismod. Pellentesque nibh mauris, pellentesque ac ligula id, aliquam porta nunc. Curabitur feugiat pharetra quam et aliquam. Quisque laoreet augue at tortor viverra, venenatis mattis dui bibendum.',
  },
};
