'use client';

import { ArrowRight, Clock, PawPrint, Waves } from 'lucide-react';

import { Image } from '@components/Image';
import { Link } from '@components/Link';

import { AvailableBookingActions } from './components/AvailableBookingActions';
import { UnavailableBookingActions } from './components/UnavailableBookingActions';

import { Badge } from '@ui/components/DataDisplay/Badge';
import { Caroussel } from '@ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@ui/components/DataDisplay/Caroussel/hooks/useCaroussel';
import { Icon } from '@ui/components/DataDisplay/Icon';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { Section } from '@ui/components/Layouts/Section';

export interface HotelDetailsProps {
  name: string;
  address: string;
  category: 'SILVER' | 'MASTER';
  images: string[];
  amenities: {
    hasPool: boolean;
    has24hReception: boolean;
    isPetFriendly: boolean;
  };
  isAvailable: boolean;
  bookingType: 'BOOKABLE' | 'REQUESTABLE';
  extraPrice: number;
  availableDays: number;
}

export const HotelDetails = ({
  name,
  address,
  category,
  images,
  amenities,
  isAvailable,
  bookingType,
  extraPrice,
  availableDays,
}: HotelDetailsProps) => {
  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    isHidden,
  } = useCaroussel({});

  return (
    <Section className="flex flex-col md:flex-row gap-6 p-4 border-spacing-1 border border-gray-200 w-full">
      <div className="w-full md:w-[40%]">
        <Caroussel.Root>
          <Caroussel.Container ref={emblaRef}>
            {images.map((image, index) => (
              <Caroussel.Item key={index} className="flex-[0_0_100%]">
                <div className="relative h-[320px] rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${name} - Imagem ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
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
      {/* Informações do Hotel */}
      <div className="w-full md:w-[60%] flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Badge variant={category === 'SILVER' ? 'neutral' : 'warning'}>
              {category}
            </Badge>
            <Badge variant="outline">master</Badge>
          </div>

          <Title size="xl">{name}</Title>
          <Text align="left" className="md:text-left">
            {address}
          </Text>

          <Link
            href="/detalhes"
            className="pb-5 text-highlight flex items-center gap-2"
          >
            Ver mais detalhes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex gap-4 border-t-2 pt-5">
          {amenities.hasPool && (
            <div className="flex items-center gap-2">
              <Icon icon={Waves} className="w-5 h-5" />
              <Text size="sm">Piscina</Text>
            </div>
          )}
          {amenities.has24hReception && (
            <div className="flex items-center gap-2">
              <Icon icon={Clock} className="w-5 h-5" />
              <Text size="sm">Recepção 24h</Text>
            </div>
          )}
          {amenities.isPetFriendly && (
            <div className="flex items-center gap-2">
              <Icon icon={PawPrint} className="w-5 h-5" />
              <Text size="sm">Pet Friendly</Text>
            </div>
          )}
        </div>

        {isAvailable ? (
          <AvailableBookingActions
            bookingType={bookingType}
            extraPrice={extraPrice}
            availableDays={availableDays}
          />
        ) : (
          <UnavailableBookingActions />
        )}
      </div>
    </Section>
  );
};
