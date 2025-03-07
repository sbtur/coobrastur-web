'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Image } from '@components/Image';
import { useToggle } from '@hooks/useToggle';

import { HotelResponse } from '../../types/hotels.types';
import { HotelDialog } from '../HotelDialog';

import { HotelCard } from '@ui/components/Blocks/HotelCard';
import { Badge } from '@ui/components/DataDisplay/Badge';
import { Bookmark } from '@ui/components/DataDisplay/Bookmark';
import { Caroussel } from '@ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@ui/components/DataDisplay/Caroussel/hooks/useCaroussel';
import { Icon } from '@ui/components/DataDisplay/Icon';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { Section } from '@ui/components/Layouts/Section';
import { ArrowRight } from '@ui/lib/icons';

interface HotelListProps {
  hotels: HotelResponse[];
}

export const HotelList = ({ hotels }: HotelListProps) => {
  const { isEnabled, toggle } = useToggle();
  const { push } = useRouter();

  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
    isHidden,
  } = useCaroussel({});

  const handleOpenHotel = (hotelId: number) => {
    push(`?h=${hotelId}`, {
      scroll: false,
    });
    toggle();
  };

  const handleCloseHotel = () => {
    push('/', {
      scroll: false,
    });
    toggle();
  };

  useEffect(() => {
    console.log('renderizando');
  }, []);

  return (
    <Section className="md:px-4">
      {isEnabled && (
        <HotelDialog isOpen={isEnabled} onClose={handleCloseHotel} />
      )}
      <Caroussel.Root>
        <Caroussel.Container ref={emblaRef}>
          {hotels.map(hotel => (
            <Caroussel.Item
              key={hotel.name}
              className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
            >
              <HotelCard.Root>
                <HotelCard.ImageWrapper>
                  <>
                    <HotelCard.ImageIcon>
                      <Bookmark
                        onClick={() => console.log('Saved to favorites')}
                      />
                      {hotel.is_preferential && <Badge>Preferencial</Badge>}
                    </HotelCard.ImageIcon>
                    <HotelCard.Image>
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        width={315}
                        height={416}
                      />
                    </HotelCard.Image>
                  </>
                </HotelCard.ImageWrapper>
                <HotelCard.Description>
                  <Title as="h3" size="xs" align="center">
                    {hotel.name}
                  </Title>
                  <Text size="sm" align="center">
                    {hotel.street}
                  </Text>
                  <HotelCard.Button
                    type="button"
                    onClick={() => handleOpenHotel(hotel.id)}
                  >
                    Ver mais detalhes{' '}
                    <Icon icon={ArrowRight} variant="primary" />
                  </HotelCard.Button>
                </HotelCard.Description>
              </HotelCard.Root>
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
        <Caroussel.ButtonDotWrapper>
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
    </Section>
  );
};
