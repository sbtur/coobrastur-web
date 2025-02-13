import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@workspace/ui/components';

const meta = {
  title: 'Blocks/Header',
  component: Header,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'primary',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Header content',
  },
};
