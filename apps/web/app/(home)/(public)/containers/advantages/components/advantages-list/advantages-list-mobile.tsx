import { Card } from '../../components/card';
import { ADVANTAGES } from '../../helpers';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@ui/components/data-display/caroussel';

export const AdvantagesListMobile = () => {
  return (
    <div className="lg:hidden">
      <Carousel>
        <CarouselContent>
          {ADVANTAGES.map(item => (
            <CarouselItem
              key={item.title}
              className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
            >
              <Card advantage={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
