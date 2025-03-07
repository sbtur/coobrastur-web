import type { Meta, StoryObj } from '@storybook/react';
import { HotelDialog } from '@ui/components/Blocks/HotelDialog';

const meta: Meta<typeof HotelDialog> = {
  title: 'Block/Hotel Dialog',
  component: HotelDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof HotelDialog>;

export const Default: Story = {
  render: () => <HotelDialog />,
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'small-640',
    },
  },
  render: () => <HotelDialog />,
};
