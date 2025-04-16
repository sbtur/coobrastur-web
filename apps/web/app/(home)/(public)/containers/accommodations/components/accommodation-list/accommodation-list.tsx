'use client';

import { AccommodationCard } from '@components/accommodation-card';
import { AccommodationDialog } from '@components/accommodation-dialog/accommodation-dialog';

import { AccommodationListItem } from '@/app/search-place/http/accommodation';
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
  accommodations: AccommodationListItem[];
}

export const AccommodationList = ({
  accommodations,
}: AccommodationListProps) => {
  const { isEnabled, handleOpenHotel, handleCloseHotel, toggle } =
    useHotelListDetail();

  return (
    <Content className="px-4 lg:px-0">
      {isEnabled && (
        <AccommodationDialog
          isOpen={isEnabled}
          onClose={handleCloseHotel}
          onOpenChange={toggle}
        />
      )}
      <Carousel
        className="h-full"
        autoplay={{ playOnInit: true }}
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
