import { SUPPORT } from '../../helpers/support';
import { Card } from '../card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@ui/components/data-display/caroussel';

export const SupportListMobile = () => {
  return (
    <div className="px-4 lg:px-0">
      <Carousel
        className="lg:hidden h-full mt-8"
        autoplay={{ playOnInit: true }}
        opts={{ loop: true, align: 'start' }}
      >
        <CarouselContent className="h-full w-full">
          {SUPPORT.map(item => (
            <CarouselItem key={item.title} className="flex-[0_0_95%]">
              <Card key={item.title} content={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
