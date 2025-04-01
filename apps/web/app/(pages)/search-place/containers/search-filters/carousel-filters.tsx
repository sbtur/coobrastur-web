import { FILTERS } from '../../helpers/filters';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';
import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';

export const CarouselFilters = () => {
  return (
    <div className="bg-background shadow-lg mb-8 lg:mb-0 pb-6 lg:pb-0 lg:shadow-none">
      <Carousel className="h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {FILTERS.map(filter => (
            <CarouselItem
              key={filter.value}
              className="flex-[0_0_25%] lg:flex-[0_0_16%] flex items-center justify-center"
            >
              <button key={filter.value} className="group">
                <Text className="group-hover:text-highlight flex flex-col gap-1 items-center justify-center">
                  <Icon
                    icon={filter.icon}
                    className="group-hover:text-highlight"
                  />
                  {filter.label}
                </Text>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6" />
        <CarouselNext className="-right-6" />
      </Carousel>
    </div>
  );
};
