import { Bookmark } from '@workspace/ui/components/DataDisplay/Bookmark';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'DataDisplay/Bookmark',
  component: Bookmark,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Bookmark>;

export default meta;

type Story = StoryObj<typeof Bookmark>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    active: true,
  },
};
