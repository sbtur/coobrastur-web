import type { Meta, StoryObj } from '@storybook/react';
import NextImage from 'next/image';
import { HotelCard, type HotelCardProps } from '@workspace/ui/components';

const meta = {
  title: 'Blocks/HotelCard',
  component: HotelCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HotelCard>;

export default meta;

type Story = StoryObj<typeof HotelCard>;

const baseArgs: HotelCardProps = {
  title: 'Sky Borges Hotel Alpenhaus',
  address: 'Avenida Borges De Medeiros, 4206, Gramado, RS',
  href: '#',
  image: {
    src: '/images/hotel.jpeg',
    alt: 'Sky Borges Hotel Alpenhaus - Luxury room with a view to the garden',
  },
};

export const Default: Story = {
  args: baseArgs,
};

export const LeftAligned: Story = {
  args: {
    ...baseArgs,
    align: 'left',
  },
};

export const RightAligned: Story = {
  args: {
    ...baseArgs,
    align: 'right',
  },
};

export const WithNextImage: Story = {
  args: {
    ...baseArgs,
    image: {
      src: '/images/hotel.jpeg',
      alt: 'Sky Borges Hotel Alpenhaus - Luxury room with a view to the garden',
    },
    renderImage: (props) => <NextImage {...props} />,
  },
};

export const WithCustomActionLabel: Story = {
  args: {
    ...baseArgs,
    actionLabel: 'Book Now',
  },
};

export const withSmallImage: Story = {
  args: {
    ...baseArgs,
    size: 'small',
  },
};

export const withMediumImage: Story = {
  args: {
    ...baseArgs,
    size: 'medium',
  },
};

export const withLargeImage: Story = {
  args: {
    ...baseArgs,
    size: 'large',
  },
};
