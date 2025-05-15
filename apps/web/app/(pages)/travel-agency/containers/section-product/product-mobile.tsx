import { ArrowRight } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@coobrastur/ui/components/data-display/caroussel';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Title } from '@coobrastur/ui/components/data-display/title';

import { Image } from '@/shared/components/image';
import { Link } from '@/shared/components/link';

import { OUR_SERVICE } from '../../helpers/our-product';

export const ProductMobile = () => {
  return (
    <div className="mt-6 lg:hidden">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {OUR_SERVICE.map(item => (
            <CarouselItem
              key={item.id}
              className="flex-[0_0_87%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
            >
              <div className="relative group">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={355}
                  height={329}
                  className="w-full h-[329px] object-cover rounded-2xl"
                />
                <div className="absolute bg-background rounded-xl bottom-5 left-3 w-80">
                  <div className="flex flex-col px-4">
                    <Title size="xs" className="mt-7">
                      {item.title}
                    </Title>
                    <Link
                      href="#"
                      className="text-blue-500 flex items-center gap-2 mt-2 mb-5"
                    >
                      Ver mais detalhes
                      <Icon icon={ArrowRight} variant="secondary" />
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
