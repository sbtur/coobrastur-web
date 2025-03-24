import Image from 'next/image';
import Link from 'next/link';

import { AccommodationDetail, CATEGORY_COLORS } from '@coobrastur/types-shared';

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui/components/DataDisplay/Badge';
import { Caroussel } from '@ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@ui/components/DataDisplay/Caroussel/hooks/useCaroussel';
import { Icon } from '@ui/components/DataDisplay/Icon';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { Button } from '@ui/components/DataEntry/Button';
import { Separator } from '@ui/components/separator';
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
  images: [
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
    images,
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

  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    isHidden,
  } = useCaroussel({});

  return (
    <div className="grid grid-cols-3 w-[860px] h-[330px]">
      <div className="col-span-1">
        <Caroussel.Root className="h-full">
          <Caroussel.Container
            ref={emblaRef}
            className="p-0 rounded-none rounded-s-2xl h-full"
          >
            {images.map((image: string) => (
              <Caroussel.Item
                key={image}
                className="flex-[0_0_100%] p-0 group relative"
              >
                <Image
                  src={image}
                  alt={name}
                  width={290}
                  height={330}
                  className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-none"
                />
              </Caroussel.Item>
            ))}
          </Caroussel.Container>
          <Caroussel.ButtonWrapper
            className={`hidden ${isHidden ? 'hidden' : 'md:flex'}`}
          >
            <Caroussel.ButtonPrevious
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              className="-ml-4"
            />
            <Caroussel.ButtonNext
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className="-mr-6"
            />
          </Caroussel.ButtonWrapper>
        </Caroussel.Root>
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
  title: 'Components/HotelDetails',
  component: HotelDetailsComponent,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'centered',
    },
  },
  args: {
    accommodation: defaultAccommodation,
  },
  decorators: [
    Story => (
      <div className="w-[80vw] mx-auto">
        <Story />
      </div>
    ),
  ],
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
