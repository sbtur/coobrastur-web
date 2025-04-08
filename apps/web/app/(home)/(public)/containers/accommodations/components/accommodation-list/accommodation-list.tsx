'use client';

import { Accommodation } from '@coobrastur/types-shared';

import { AccommodationCard } from '@components/accommodation-card';
import {
  AccommodationDialog,
  AccommodationDialogMobile,
} from '@components/accommodation-dialog';

import {
  ResponsiveLargerThan,
  ResponsiveSmallerThan,
} from '@/shared/components/responsive';
import { useHotelListDetail } from '@/shared/hooks/use-hotel-list-detail';

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
  const { isEnabled, handleOpenHotel, handleCloseHotel, toggle } =
    useHotelListDetail();

  return (
    <Content className="px-4 lg:px-0">
      {isEnabled && (
        <>
          <ResponsiveLargerThan breakpoint="lg">
            <AccommodationDialog
              isOpen={isEnabled}
              onOpenChange={toggle}
              onClose={handleCloseHotel}
            />
          </ResponsiveLargerThan>
          <ResponsiveSmallerThan breakpoint="lg">
            <AccommodationDialogMobile
              isOpen={isEnabled}
              onOpenChange={toggle}
            />
          </ResponsiveSmallerThan>
        </>
      )}
      <Carousel
        className="h-full"
        autoplay={{ playOnInit: false }}
        opts={{
          loop: true,
          align: 'start',
          breakpoints: {
            '(min-width: 1024px)': {
              slidesToScroll: 4,
            },
            '(max-width: 1024px)': {
              slidesToScroll: 1,
            },
          },
        }}
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
