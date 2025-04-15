import { FILTERS } from '../../../helpers/filters';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@ui/components/data-display/caroussel';
import { Icon } from '@ui/components/data-display/icon';

export const FiltersMobile = () => {
  return (
    <div className="lg:hidden bg-background shadow-lg mb-6 py-3">
      <Carousel
        className="h-full w-full max-w-screen-xl mx-auto px-4"
        opts={{
          loop: true,
          align: 'start',
          dragFree: true,
          slidesToScroll: 2,
        }}
      >
        <CarouselContent className="h-full">
          {FILTERS.map(filter => (
            <CarouselItem
              key={filter.value}
              className="basis-1/2 md:basis-1/3 lg:basis-1/6"
            >
              <button
                key={filter.value}
                className="h-full w-full group text-text-body text-[13px] md:text-sm lg:text-base hover:text-highlight-100 flex items-center justify-center whitespace-nowrap px-1"
              >
                <Icon
                  icon={filter.icon}
                  variant="highlight"
                  className="text-neutral-300 group-hover:text-highlight-100 mr-1 inline-block shrink-0"
                />
                <span className="truncate">{filter.label}</span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
