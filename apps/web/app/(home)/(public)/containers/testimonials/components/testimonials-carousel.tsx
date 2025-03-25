import { TESTIMONIALS } from '../helpers/testimonials';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';

export const TestimonialsCaroussel = () => {
  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        {TESTIMONIALS.map(item => (
          <CarouselItem key={item.id} className="flex-[0_0_100%]">
            <div className="w-full h-[245px] border-2 border-secondary-200 rounded-[20px] p-10 bg-secondary-100">
              <Title as="h3" size="sm">
                {item.name}
              </Title>
              <Text as="span" size="sm" className="italic">
                {item.date}
              </Text>
              <Text className="mt-2">{item.description}</Text>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-6" />
      <CarouselNext className="-right-6" />
    </Carousel>
  );
};
