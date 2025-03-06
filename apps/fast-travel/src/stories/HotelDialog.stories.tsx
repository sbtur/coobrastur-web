import { useState } from 'react';
import Image from 'next/image';

import { Bookmark } from '@workspace/ui/components/DataDisplay/Bookmark';
import { Caroussel } from '@workspace/ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@workspace/ui/components/DataDisplay/Caroussel/hooks/useCaroussel';
import { Dialog } from '@workspace/ui/components/DataDisplay/Dialog';
import { Icon, IconWrapper } from '@workspace/ui/components/DataDisplay/Icon';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Button } from '@workspace/ui/components/DataEntry/Button';
import { Link } from '@workspace/ui/components/DataEntry/Link';
import { Separator } from '@workspace/ui/components/separator';
import {
  ArrowRight,
  ChevronLeft,
  Share2,
  Table,
  X,
} from '@workspace/ui/lib/icons';

import type { Meta, StoryObj } from '@storybook/react';

const HOTELS = [
  {
    name: 'Hotel 1',
    image: '/images/places/place-1.jpg',
  },
  {
    name: 'Hotel 2',
    image: '/images/places/place-2.jpg',
  },
  {
    name: 'Hotel 3',
    image: '/images/places/place-3.jpg',
  },
  {
    name: 'Hotel 4',
    image: '/images/places/place-4.jpg',
  },
  {
    name: 'Hotel 5',
    image: '/images/places/place-5.jpg',
  },
  {
    name: 'Hotel 6',
    image: '/images/places/place-6.jpg',
  },
];

export const HotelDialog = () => {
  const [isShowGallery, setIsShowGallery] = useState(false);

  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  } = useCaroussel({});

  const handleShowGallery = () => {
    setIsShowGallery(!isShowGallery);
  };

  return (
    <Dialog.Root defaultOpen>
      <Dialog.Trigger asChild>
        <Button type="button">Abrir hotel</Button>
      </Dialog.Trigger>
      <Dialog.Content className="h-full md:h-auto p-0 gap-0" hideCloseButton>
        <Dialog.Close
          asChild
          className="absolute right-3 top-3 z-10 md:right-0 lg:-right-7 md:-top-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <button onClick={() => console.log('close')}>
            <Icon
              icon={X}
              className="h-8 w-8 max-md:text-neutral"
              variant="white"
            />
            <span className="sr-only">Fechar</span>
          </button>
        </Dialog.Close>
        <div className="overflow-y-auto md:flex md:rounded-[20px] md:h-[570px] relative">
          <div
            className={`${
              isShowGallery ? 'w-0 overflow-hidden' : 'md:w-1/2 lg:w-2/3'
            } md:h-full transition-all duration-300 group`}
          >
            <div className="group-[.w-0]:hidden transition-all duration-300">
              <div className="py-10 px-8 lg:px-10">
                <Dialog.Header>
                  <Title as="h2" size="sm">
                    Sky Borges Hotel Alpenhaus
                  </Title>
                  <Text size="sm">
                    Avenida Borges De Medeiros, 4206, Gramado, RS
                  </Text>
                </Dialog.Header>
                <div className="max-h-[280px] py-4 pr-4 mt-6 overflow-y-auto">
                  <Text size="sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos.O Sky Borges Hotel Alpenhaus é um hotel 4
                    estrelas em Gramado, com fácil acesso às principais atrações
                    da cidade, incluindo o Palácio dos Festivais e o Centro de
                    Convenções Expogramado. Este hotel oferece quartos
                    confortáveis, piscina térmica coberta, sauna e academia.
                  </Text>

                  <div className="mt-6">
                    <Title as="h3" size="xs">
                      Comodidades:
                    </Title>
                    <ul className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm text-text mt-4">
                      <li>Piscina</li>
                      <li>Recepção 24h</li>
                      <li>Pet Friendly</li>
                      <li>Internet</li>
                      <li>Salão de Jogos</li>
                      <li>Estacionamento</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center mt-6 md:text-left">
                  <Link href="/">
                    Ir para a página do Hotel <Icon icon={ArrowRight} />
                  </Link>
                </div>
              </div>
              <Separator />
              <Dialog.Footer className="flex-row h-[90px] md:pl-7 lg:pl-10 pr-0 gap-3 items-center justify-center md:justify-start">
                <Bookmark />
                <IconWrapper as="button">
                  <Icon icon={Share2} />
                </IconWrapper>
              </Dialog.Footer>
            </div>
          </div>

          <div
            className={`${isShowGallery ? 'w-full' : 'md:h-auto md:w-1/2'} h-full relative pb-[70px] md:pb-0 transition-all duration-300 group`}
          >
            <div className="hidden md:block absolute top-0 right-0 p-4 w-full z-10">
              <div
                className={`${isShowGallery ? 'hidden' : 'flex gap-4 flex-wrap justify-end'}`}
              >
                <IconWrapper
                  as="button"
                  onClick={handleShowGallery}
                  className="flex items-center gap-2"
                >
                  <Icon icon={Table} />
                  Mostrar todas as fotos
                </IconWrapper>
              </div>

              <div
                className={`${isShowGallery ? 'flex justify-between gap-4' : 'hidden'}`}
              >
                <IconWrapper
                  as="button"
                  onClick={handleShowGallery}
                  className="flex items-center gap-2"
                >
                  <Icon icon={ChevronLeft} />
                  Voltar
                </IconWrapper>

                <div className="flex gap-4">
                  <Bookmark />
                  <IconWrapper as="button">
                    <Icon icon={Share2} />
                  </IconWrapper>
                </div>
              </div>
            </div>

            <Caroussel.Root className="h-full">
              <Caroussel.Container
                ref={emblaRef}
                className="p-0 rounded-none h-full"
              >
                {HOTELS.map(hotel => (
                  <Caroussel.Item
                    key={hotel.name}
                    className="flex-[0_0_100%] p-0 rounded-none relative"
                  >
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      width={355}
                      height={800}
                      className="w-full h-full md:h-[570px] object-cover"
                    />
                  </Caroussel.Item>
                ))}
              </Caroussel.Container>
              <Caroussel.ButtonWrapper className="md:flex">
                <Caroussel.ButtonPrevious
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                  className="ml-4"
                />
                <Caroussel.ButtonNext
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                  className="mr-4"
                />
              </Caroussel.ButtonWrapper>
              <Caroussel.ButtonDotWrapper className="absolute bottom-[110px] left-0 right-0 z-10">
                {scrollSnaps.map((_, index) => (
                  <Caroussel.ButtonDot
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    index={index}
                    selectedIndex={selectedIndex}
                  />
                ))}
              </Caroussel.ButtonDotWrapper>
            </Caroussel.Root>

            <Button
              size="lg"
              className="absolute bottom-0 left-0 right-0 h-[70px] md:h-[90px] rounded-none"
            >
              Assine e planeje sua viagem{' '}
              <Icon icon={ArrowRight} variant="white" />
            </Button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

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
