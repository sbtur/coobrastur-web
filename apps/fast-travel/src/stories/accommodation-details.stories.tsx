import Image from 'next/image';
import Link from 'next/link';

import { AccommodationDetail, CATEGORY_COLORS } from '@coobrastur/types-shared';

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui/components/data-display/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';
import { Icon } from '@ui/components/data-display/icon';
import { Separator } from '@ui/components/data-display/separator';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Button } from '@ui/components/data-entry/button';
import {
  ArrowRight,
  CalendarClock,
  CalendarMinus,
  Receipt,
  Waves,
} from '@ui/lib/icons';

const defaultAccommodation: AccommodationDetail = {
  id: 7257,
  broker: 'coobrastur',
  name: 'Jurerê Beach Village',
  unique_id: '7257',
  image: '/images/mocks/places/place-1.jpg',
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
  extra: 0,
  is_preferential: false,
  category: 'Gold',
  available_to_book: true,
  absolute_url: '/brasil/sc/florianopolis/jurere-beach-village/',
  by_request: false,
  position: {
    lng: -484896,
    lat: -274394,
  },
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.O Sky Borges Hotel Alpenhaus é um hotel 4 estrelas em Gramado, com fácil acesso às principais atrações da cidade, incluindo o Palácio dos Festivais e o Centro de Convenções Expogramado. Este hotel oferece quartosconfortáveis, piscina térmica coberta, sauna e academia.',
  amenities: ['Piscina', 'Recepção 24h', 'Pet Friendly'],
  gallery: [
    '/images/places/place-1.jpg',
    '/images/places/place-2.jpg',
    '/images/places/place-3.jpg',
    '/images/places/place-4.jpg',
    '/images/places/place-5.jpg',
  ],
};

export type HotelDetailsProps = {
  accommodation: AccommodationDetail;
};

const HotelDetailsComponent = ({ accommodation }: HotelDetailsProps) => {
  const {
    name,
    gallery,
    category,
    street,
    amenities,
    extra,
    available_to_book,
    by_request,
    total_days,
  } = accommodation;

  const bookingAvailability = {
    availableToBook: available_to_book,
    availableByRequest: by_request,
    unavailableToBook: !available_to_book && !by_request,
  };

  return (
    <div className="grid grid-cols-3 w-[860px] min-h-[330px]">
      <div className="col-span-1">
        <Carousel className="h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {gallery.map(image => (
              <CarouselItem key={image} className="flex-[0_0_100%] group">
                <Image
                  src={image}
                  alt={name}
                  width={290}
                  height={330}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-s-2xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="-right-6" />
        </Carousel>
      </div>
      <div className="col-span-2 border border-border rounded-e-[10px] px-7 py-6">
        <Badge variant={CATEGORY_COLORS[category]} className="mb-4">
          {category}
        </Badge>
        <Title>{name}</Title>
        <Text className="mt-3">{street}</Text>

        <Link
          href="/detalhes"
          className="mt-3 text-highlight flex items-center gap-2"
        >
          Ver mais detalhes
          <Icon icon={ArrowRight} variant="primary" />
        </Link>

        <div className="flex flex-wrap gap-2 mt-4">
          {amenities.map((amenitie: string) => (
            <div className="space-x-2" key={amenitie}>
              <Icon icon={Waves} size="lg" />
              <Text as="span" size="sm">
                {amenitie}
              </Text>
            </div>
          ))}
        </div>

        <Separator className="mt-8 mb-4" />

        <div className="flex justify-between items-center">
          <div className="">
            <Text size="xl" className="font-bold text-highlight items-center">
              {total_days} {total_days === 1 ? 'Diária' : 'Diárias'}
            </Text>

            {extra > 0 ? (
              <Text className="flex items-center" size="sm">
                <Icon icon={Receipt} size="sm" />
                {extra.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}{' '}
                <Text as="span" className="font-bold underline ml-1">
                  adicionais
                </Text>
              </Text>
            ) : null}
          </div>

          <div className="flex gap-2">
            {bookingAvailability.availableToBook ? (
              <Button size="lg">
                Reservar
                <Icon icon={ArrowRight} variant="white" />
              </Button>
            ) : null}

            {bookingAvailability.availableByRequest ? (
              <>
                <Button variant="outline-secondary" size="sm">
                  Datas disponíveis
                </Button>

                <Button size="sm" variant="secondary">
                  Solicitar Reserva{' '}
                  <Icon icon={CalendarClock} className="w-4 h-4 text-white" />
                </Button>
              </>
            ) : null}

            {bookingAvailability.unavailableToBook ? (
              <>
                <Button variant="outline-secondary" size="sm">
                  Datas disponíveis
                </Button>

                <Button size="sm" variant="secondary" disabled>
                  Indisponível{' '}
                  <Icon icon={CalendarMinus} className="w-4 h-4 text-white" />
                </Button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: 'Block/Accommodation Detail',
  component: HotelDetailsComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    accommodation: defaultAccommodation,
  },
  tags: ['autodocs'],
} satisfies Meta<HotelDetailsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Available: Story = {
  render: ({ accommodation }) => (
    <HotelDetailsComponent accommodation={accommodation} />
  ),
};

export const AvailableByRequest: Story = {
  args: {
    accommodation: {
      ...defaultAccommodation,
      available_to_book: false,
      by_request: true,
    },
  },
  render: ({ accommodation }) => (
    <HotelDetailsComponent accommodation={accommodation} />
  ),
};

export const Unavailable: Story = {
  args: {
    accommodation: {
      ...defaultAccommodation,
      available_to_book: false,
      by_request: false,
    },
  },
  render: ({ accommodation }) => (
    <HotelDetailsComponent accommodation={accommodation} />
  ),
};

export const WithExtraPrice: Story = {
  args: {
    accommodation: {
      ...defaultAccommodation,
      extra: 400.89,
    },
  },
  render: ({ accommodation }) => (
    <HotelDetailsComponent accommodation={accommodation} />
  ),
};
