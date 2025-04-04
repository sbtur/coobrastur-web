'use client';

import { useRouter } from 'next/navigation';

import { Accommodation } from '@coobrastur/types-shared';

import { AccommodationCard } from '@components/accommodation-card';
import {
  AccommodationDialog,
  AccommodationDialogMobile,
} from '@components/accommodation-dialog';
import { useToggle } from '@hooks/use-toggle';

import {
  ResponsiveLargerThan,
  ResponsiveSmallerThan,
} from '@/shared/components/responsive';

import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';
import { Content } from '@ui/components/layouts/content';

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
    <Content className="px-4 lg:px-0">
      {isEnabled && (
        <>
          <ResponsiveLargerThan breakpoint="lg">
            <AccommodationDialog
              isOpen={isEnabled}
              onClose={handleCloseHotel}
            />
          </ResponsiveLargerThan>
          <ResponsiveSmallerThan breakpoint="lg">
            <AccommodationDialogMobile
              isOpen={isEnabled}
              onClose={handleCloseHotel}
            />
          </ResponsiveSmallerThan>
        </>
      )}
      <Carousel
        className="h-full"
        autoplay={{ playOnInit: true }}
        opts={{ loop: true, align: 'start' }}
      >
        <CarouselContent className="h-full">
          {accommodations.map(accommodation => (
            <CarouselItem
              key={accommodation.name}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
            >
              <AccommodationCard
                onClick={handleOpenHotel}
                accommodation={accommodation}
                key={accommodation.id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4" />
        <CarouselNext className="-right-4" />
        <CarouselDot />
      </Carousel>
    </Content>
  );
};
