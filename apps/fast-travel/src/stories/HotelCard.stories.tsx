import { HotelCard } from '@coobrastur/ui/components/Blocks/HotelCard';
import { Icon } from '@coobrastur/ui/components/DataDisplay/Icon';
import { Text } from '@coobrastur/ui/components/DataDisplay/Text';
import { Title } from '@coobrastur/ui/components/DataDisplay/Title';
import { ArrowRight } from '@coobrastur/ui/lib/icons';

import type { Meta, StoryObj } from '@storybook/react';

const HotelCardComponent = () => {
  return (
    <HotelCard.Root>
      <HotelCard.Image>
        <img src="/images/hotel.jpeg" alt="Sky Borges Hotel Alpenhaus" />
      </HotelCard.Image>
      <HotelCard.Description>
        <Title as="h3" size="xs" align="center">
          Sky Borges Hotel Alpenhaus
        </Title>
        <Text size="sm" align="center">
          Avenida Borges De Medeiros, 4206, Gramado, RS
        </Text>
        <HotelCard.Button type="link" href="#" className="justify-center">
          Ver mais detalhes <Icon icon={ArrowRight} variant="primary" />
        </HotelCard.Button>
      </HotelCard.Description>
    </HotelCard.Root>
  );
};

const meta = {
  title: 'Blocks/HotelCard',
  component: HotelCardComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HotelCardComponent>;

export default meta;

type Story = StoryObj<typeof HotelCardComponent>;

const baseArgs: Story = {
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
