'use client';

import { useRouter } from 'next/navigation';

import { HotelCard } from '@components/HotelCard';
import { useToggle } from '@hooks/useToggle';

import { AccommodationDialog } from '../AccommodationDialog';

import { Accommodation } from '@shared/types/accommodation/accommodation.types';
import { Caroussel } from '@ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@ui/components/DataDisplay/Caroussel/hooks/useCaroussel';
import { Section } from '@ui/components/Layouts/Section';

interface AccommodationListProps {
  accommodations: Accommodation[];
}

export const AccommodationList = ({
  accommodations,
}: AccommodationListProps) => {
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

  return (
    <Section className="md:px-4">
      {isEnabled && (
        <AccommodationDialog isOpen={isEnabled} onClose={handleCloseHotel} />
      )}
      <Caroussel.Root>
        <Caroussel.Container ref={emblaRef}>
          {accommodations.map(accommodation => (
            <Caroussel.Item
              key={accommodation.name}
              className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
            >
              <HotelCard
                onClick={handleOpenHotel}
                accommodation={accommodation}
                key={accommodation.id}
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
