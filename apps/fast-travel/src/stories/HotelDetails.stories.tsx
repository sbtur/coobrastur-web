import { HotelDetails } from '../../../web/shared/components/HotelDetails/HotelDetails';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/HotelDetails',
  component: HotelDetails,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'centered',
    },
  },
  decorators: [
    Story => (
      <div className="w-[80vw] mx-auto">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof HotelDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: 'Hotel Exemplo',
  address: 'Rua das Flores, 123 - Centro',
  category: 'SILVER' as const,
  images: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070',
  ],
  amenities: {
    hasPool: true,
    has24hReception: true,
    isPetFriendly: true,
  },
  isAvailable: false,
  bookingType: 'BOOKABLE',
  extraPrice: 1000,
  availableDays: 3,
};

export const Default: Story = {
  args: {
    ...defaultProps,
    bookingType: 'BOOKABLE' as const,
    availableDays: 3,
  },
};

export const Available: Story = {
  args: {
    ...defaultProps,
    category: 'MASTER',
    bookingType: 'BOOKABLE' as const,
    availableDays: 3,
    extraPrice: 0,
    isAvailable: true,
  },
};

export const AvailableWithExtraPrice: Story = {
  args: {
    ...defaultProps,
    category: 'MASTER',
    bookingType: 'BOOKABLE' as const,
    availableDays: 3,
    extraPrice: 1000,
    isAvailable: true,
  },
};

export const Unavailable: Story = {
  args: {
    ...defaultProps,
    isAvailable: false,
    bookingType: 'REQUESTABLE' as const,
    extraPrice: 0,
  },
};
