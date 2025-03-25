import { SUPPORT } from '../../helpers/support';
import { Card } from '../card';

import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
} from '@ui/components/data-display/caroussel';

export const SupportListMobile = () => {
  return (
    <div>
      <Carousel className="h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {SUPPORT.map(item => (
            <CarouselItem key={item.title} className="flex-[0_0_75%]">
              <Card key={item.title} content={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDot />
      </Carousel>
    </div>
  );
};
