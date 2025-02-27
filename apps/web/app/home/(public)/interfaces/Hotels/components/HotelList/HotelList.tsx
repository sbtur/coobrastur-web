'use client';

import { HotelCard } from '@workspace/ui/components/Blocks/HotelCard';
import { Caroussel } from '@workspace/ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@workspace/ui/components/DataDisplay/Caroussel/hooks/useCaroussel';
import { Icon } from '@workspace/ui/components/DataDisplay/Icon';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Section } from '@workspace/ui/components/Layouts/Section';
import { ArrowRight } from '@workspace/ui/lib/icons';

import { Image } from '@components/Image';
import { useToggle } from '@hooks/useToggle';

import { HotelResponse } from '../../types/hotels.types';
import { HotelDialog } from '../HotelDialog';

interface HotelListProps {
  hotels: HotelResponse[];
}

export const HotelList = ({ hotels }: HotelListProps) => {
  const { isEnabled, toggle } = useToggle();

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

  if (isEnabled) return <HotelDialog isOpen={isEnabled} onClose={toggle} />;

  return (
    <Section className="px-4">
      <Caroussel.Root>
        <Caroussel.Container ref={emblaRef}>
          {hotels.map(hotel => (
            <Caroussel.Item
              key={hotel.name}
              className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
            >
              <HotelCard.Root>
                <HotelCard.Image>
                  <Image src={hotel.image} alt={hotel.name} fill />
                </HotelCard.Image>
                <HotelCard.Description>
                  <Title as="h3" size="xs" align="center">
                    {hotel.name}
                  </Title>
                  <Text size="sm" align="center">
                    {hotel.street}
                  </Text>
                  <HotelCard.Button type="button" onClick={toggle}>
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
