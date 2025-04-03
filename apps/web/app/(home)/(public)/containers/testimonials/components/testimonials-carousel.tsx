import { TESTIMONIALS } from '../helpers/testimonials';

import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';

export const TestimonialsCaroussel = () => {
  return (
    <Carousel opts={{ loop: true }} className="w-[96%] lg:w-full mx-auto">
      <CarouselContent>
        {TESTIMONIALS.map(item => (
          <CarouselItem key={item.id} className="flex-[0_0_100%]">
            <div className="flex h-[245px] p-10 pb-[40px] border-2 border-secondary-200 rounded-[20px] bg-secondary-100 ">
              <div className="flex flex-col justify-center">
                <Title as="h3" size="sm">
                  {item.name}
                </Title>
                <Text as="span" size="sm" className="italic">
                  {item.date}
                </Text>
                <Text className="mt-2">{item.description}</Text>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4" />
      <CarouselNext className="-right-4" />
      <CarouselDot className="absolute bottom-[35px] left-0" />
    </Carousel>
  );
};
