import { Image } from '@components/image';

import { Card } from '../../components/card';
import { ADVANTAGES } from '../../helpers';

import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
} from '@ui/components/data-display/caroussel';

export const AdvantagesListMobile = () => {
  return (
    <div>
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
        <CarouselDot />
      </Carousel>

      <div className="mt-4 rounded-2xl overflow-hidden">
        <Image
          src="/images/pages/home/advantages-featured.png"
          alt="Hotel"
          width={610}
          height={408}
          className="w-full"
        />
      </div>
    </div>
  );
};
