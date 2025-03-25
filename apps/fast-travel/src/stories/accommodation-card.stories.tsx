import Image from 'next/image';

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui/components/data-display/badge';
import { Bookmark } from '@ui/components/data-display/bookmark';
import {
  HotelButton,
  HotelCard,
  HotelDescription,
  HotelImage,
  HotelImageIcon,
  HotelImageWrapper,
} from '@ui/components/data-display/hotel-card';
import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { ArrowRight } from '@ui/lib/icons';

type HotelCardProps = React.ComponentProps<typeof HotelCard> & {
  accommodation: {
    id: number;
    broker: string;
    name: string;
    unique_id: string;
    image: string;
    city: { slug: string; name: string };
    country: { slug: string; name: string };
    state: string;
    coordinates: { longitude: string; latitude: string };
    street: string;
    complement: string;
    points: number;
    total_days: number;
    extra: number;
    is_preferential: boolean;
    category: string;
    available_to_book: boolean;
    absolute_url: string;
    by_request: boolean;
    position: { lng: number; lat: number };
  };
  onClick: (accommodationId: number) => void;
};

const meta = {
  title: 'Data Display/Accommodation Card',
  component: HotelCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    accommodation: {
      id: 7257,
      broker: 'coobrastur',
      name: 'Jurerê Beach Village',
      unique_id: '7257',
      image: '/images/places/place-1.jpg',
      city: {
        slug: 'florianópolis',
        name: 'Florianópolis',
      },
      country: {
        slug: 'brasil',
        name: 'Brasil',
      },
      state: 'SC',
      coordinates: {
        longitude: '-484896.0',
        latitude: '-274394.0',
      },
      street: 'Alameda César Nascimento, 646, Jurerê, Florianópolis, SC',
      complement: '',
      points: 15000,
      total_days: 3,
      extra: 448.8,
      is_preferential: false,
      category: 'Gold',
      available_to_book: true,
      absolute_url: '/brasil/sc/florianopolis/jurere-beach-village/',
      by_request: false,
      position: {
        lng: -484896,
        lat: -274394,
      },
    },
    onClick: () => {},
  },
  tags: ['autodocs'],
} satisfies Meta<HotelCardProps>;

export default meta;

type Story = StoryObj<HotelCardProps>;

export const Default: Story = {
  render: ({ accommodation, onClick }) => (
    <HotelCard>
      <HotelImageWrapper>
        <>
          <HotelImageIcon>
            <Bookmark onClick={() => console.log('Saved to favorites')} />
          </HotelImageIcon>
          <HotelImage>
            <Image
              src={accommodation.image}
              alt={accommodation.name}
              width={315}
              height={416}
            />
          </HotelImage>
        </>
      </HotelImageWrapper>
      <HotelDescription>
        {accommodation.category && (
          <Badge variant="default" className="mx-auto">
            {accommodation.category}
          </Badge>
        )}
        <Title as="h3" size="xs" align="center">
          {accommodation.name}
        </Title>
        <Text size="sm" align="center">
          {accommodation.street}
        </Text>
        <HotelButton type="button" onClick={() => onClick(accommodation.id)}>
          Ver mais detalhes <Icon icon={ArrowRight} variant="primary" />
        </HotelButton>
      </HotelDescription>
    </HotelCard>
  ),
};

export const withSmallImage: Story = {
  args: {
    ...Default.args,
  },
  render: ({ accommodation, onClick }) => (
    <HotelCard>
      <HotelImageWrapper>
        <>
          <HotelImageIcon>
            <Bookmark onClick={() => console.log('Saved to favorites')} />
          </HotelImageIcon>
          <HotelImage size="sm">
            <Image
              src={accommodation.image}
              alt={accommodation.name}
              width={315}
              height={416}
            />
          </HotelImage>
        </>
      </HotelImageWrapper>
      <HotelDescription>
        {accommodation.category && (
          <Badge variant="default" className="mx-auto">
            {accommodation.category}
          </Badge>
        )}
        <Title as="h3" size="xs" align="center">
          {accommodation.name}
        </Title>
        <Text size="sm" align="center">
          {accommodation.street}
        </Text>
        <HotelButton type="button" onClick={() => onClick(accommodation.id)}>
          Ver mais detalhes <Icon icon={ArrowRight} variant="primary" />
        </HotelButton>
      </HotelDescription>
    </HotelCard>
  ),
};
