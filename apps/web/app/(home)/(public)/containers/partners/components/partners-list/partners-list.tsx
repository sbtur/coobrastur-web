import { Image } from '@components/image';

import { PARTNERS } from '../../helpers';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';

export const PartnersList = () => {
  return (
    <div className="mt-6 md:mt-0 md:w-10/12">
      <Carousel className="h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {PARTNERS.map(item => (
            <CarouselItem
              key={item.name}
              className="flex-[0_0_33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_16.6%] group"
            >
              <picture className="relative z-10 p-2 bg-background border rounded-2xl flex items-center justify-center shadow-md shadow-black/5 group-hover:shadow-lg transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={115}
                  height={115}
                  className="object-contain rounded-2xl pointer-events-none"
                />
              </picture>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6" />
        <CarouselNext className="-right-6" />
      </Carousel>
    </div>
  );
};
