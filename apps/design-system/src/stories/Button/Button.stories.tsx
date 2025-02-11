import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@workspace/ui/components/button';

const meta = {
  title: 'Input/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};
