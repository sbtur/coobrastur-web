import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenuDemo } from '@workspace/ui/components/menus';

const meta = {
  title: 'Example/NavigationMenuDemo',
  component: NavigationMenuDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenuDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
