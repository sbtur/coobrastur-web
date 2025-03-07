'use client';
import { HotelCard } from '@coobrastur/ui/components/Blocks/HotelCard';
import { Bookmark } from '@coobrastur/ui/components/DataDisplay/Bookmark';
import { Caroussel } from '@coobrastur/ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@coobrastur/ui/components/DataDisplay/Caroussel/hooks/useCaroussel';
import { Icon } from '@coobrastur/ui/components/DataDisplay/Icon';
import { Text } from '@coobrastur/ui/components/DataDisplay/Text';
import { Title } from '@coobrastur/ui/components/DataDisplay/Title';
import { Section } from '@coobrastur/ui/components/Layouts/Section';
import { ArrowRight } from '@coobrastur/ui/lib/icons';

import { Image } from '@components/Image';

import { DestinationResponse } from '../../types/destination.types';

interface HotelListProps {
  hotels: DestinationResponse[];
}

export const HotelList = ({ hotels }: HotelListProps) => {
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

  return (
    <Section className="md:px-4">
      <Caroussel.Root>
        <Caroussel.Container ref={emblaRef}>
          {hotels.map(hotel => (
            <Caroussel.Item
              key={hotel.id}
              className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
            >
              <HotelCard.Root>
                <HotelCard.ImageWrapper>
                  <>
                    <HotelCard.ImageIcon>
                      <Bookmark
                        onClick={() => console.log('Saved to favorites')}
                      />
                    </HotelCard.ImageIcon>

                    <HotelCard.Image size="sm">
                      <Image
                        src={hotel.image}
                        alt={hotel.city.name}
                        width={256}
                        height={256}
                      />
                    </HotelCard.Image>
                  </>
                </HotelCard.ImageWrapper>
                <HotelCard.Description>
                  <Title as="h3" size="xs" align="center">
                    {hotel.city.name}
                  </Title>
                  <Text size="sm" align="center">
                    {hotel.state.name}
                  </Text>
                  <HotelCard.Button
                    type="link"
                    href="#"
                    className="justify-center"
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
