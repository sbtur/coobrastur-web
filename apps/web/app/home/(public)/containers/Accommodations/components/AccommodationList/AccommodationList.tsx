'use client';

import { useRouter } from 'next/navigation';

import { AccommodationCard } from '@components/AccommodationCard';
import { AccommodationDialog } from '@components/AccommodationDialog';
import { useToggle } from '@hooks/useToggle';

import { Accommodation } from '@shared/types/accommodation/accommodation.types';
import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/DataDisplay/Caroussel';
import { Section } from '@ui/components/Layouts/Section';

interface AccommodationListProps {
  accommodations: Accommodation[];
}

export const AccommodationList = ({
  accommodations,
}: AccommodationListProps) => {
  const { isEnabled, toggle } = useToggle();
  const { push } = useRouter();

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
      <Carousel className="h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {accommodations.map(accommodation => (
            <CarouselItem
              key={accommodation.name}
              className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
            >
              <AccommodationCard
                onClick={handleOpenHotel}
                accommodation={accommodation}
                key={accommodation.id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6" />
        <CarouselNext className="-right-6" />
        <CarouselDot />
      </Carousel>
    </Section>
  );
};
