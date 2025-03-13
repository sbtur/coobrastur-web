'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { Image } from '@components/Image';

import { ACCOMMODATIONSDETAILS } from '@mocks/accommodations/accommodations-details';
import { Bookmark } from '@ui/components/DataDisplay/Bookmark';
import { Caroussel } from '@ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@ui/components/DataDisplay/Caroussel/hooks/useCaroussel';
import { Dialog } from '@ui/components/DataDisplay/Dialog';
import { Icon, IconWrapper } from '@ui/components/DataDisplay/Icon';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { Button } from '@ui/components/DataEntry/Button';
import { Link } from '@ui/components/DataEntry/Link';
import { Separator } from '@ui/components/separator';
import { ArrowRight, ChevronLeft, Share2, Table, X } from '@ui/lib/icons';

export interface HotelDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HotelDialog = ({ isOpen, onClose }: HotelDialogProps) => {
  const [isShowGallery, setIsShowGallery] = useState(false);
  const searchParams = useSearchParams();

  const hotel = ACCOMMODATIONSDETAILS.find(
    hotel => hotel.id === Number(searchParams.get('h')),
  );

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
    <Dialog.Root open={isOpen}>
      <Dialog.Content
        className="h-full md:h-auto p-0 gap-0"
        hideCloseButton
        onEscapeKeyDown={onClose}
        onInteractOutside={onClose}
      >
        <Dialog.Close
          asChild
          className="absolute right-3 top-3 z-10 md:right-0 lg:-right-7 md:-top-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <button onClick={onClose}>
            <Icon
              icon={X}
              className="h-8 w-8 max-md:text-neutral"
              variant="white"
            />
            <span className="sr-only">Fechar</span>
          </button>
        </Dialog.Close>
        <div className="overflow-y-auto md:flex md:rounded-[20px] md:min-h-[570px] relative">
          <div
            className={`${
              isShowGallery ? 'w-0 overflow-hidden' : 'md:w-1/2 lg:w-2/3'
            } md:h-full transition-all duration-300 group`}
          >
            <div className="group-[.w-0]:hidden transition-all duration-300">
              <div className="py-10 px-8 lg:px-10">
                <Dialog.Header>
                  <Dialog.Title asChild className="text-2xl">
                    <Title as="h2" size="sm">
                      {hotel?.name}
                    </Title>
                  </Dialog.Title>
                  <Dialog.Description asChild>
                    <Text size="sm">{hotel?.street}</Text>
                  </Dialog.Description>
                </Dialog.Header>
                <div className="max-h-[280px] py-4 pr-4 mt-6 overflow-y-auto">
                  <Text size="sm">{hotel?.description}</Text>

                  <div className="mt-6">
                    <Title as="h3" size="xs">
                      Comodidades:
                    </Title>
                    <ul className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm text-text mt-4">
                      {hotel?.amenities.map(amenity => (
                        <li key={amenity}>{amenity}</li>
                      ))}
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
                <IconWrapper>
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
                {hotel?.gallery.map(image => (
                  <Caroussel.Item
                    key={image}
                    className="flex-[0_0_100%] p-0 rounded-none relative"
                  >
                    <Image
                      src={image}
                      alt={hotel?.name}
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
