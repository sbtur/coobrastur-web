import Image from 'next/image';

import { ArrowRight } from 'lucide-react';

import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';

import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';
import {
  HotelCard,
  HotelDescription,
  HotelImage,
  HotelImageWrapper,
} from '@ui/components/data-display/hotel-card';
import { Icon } from '@ui/components/data-display/icon';
import { Container } from '@ui/components/layouts/container';

const PLACES = Array.from(Array(10).keys()).map(index => ({
  name: `Place ${index + 1}`,
  description: `Description ${index + 1}`,
  image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
}));

export function Promotions() {
  return (
    <Container className="w-full py-4 px-10" as="section">
      <div className="items-center max-w-[600px] mx-auto text-center mb-10">
        <Badge variant="default" className="mb-5">
          Promocionais
        </Badge>

        <Title size="lg" className="text-primary-300">
          Confira hotéis com <br />
          promoções imperdíveis
        </Title>

        <Text size="sm" className="text-neutral-500">
          Confira promoções dos hotéis credenciados exclusivas para assinantes.
        </Text>
      </div>

      <Carousel className="w-[340px] sm:w-[600px] md:w-[720px] lg:w-[980px] xl:w-[1200px] 2xl:w-[1500px]">
        <CarouselContent>
          {PLACES.map(slide => (
            <CarouselItem
              key={slide.name}
              className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
            >
              <HotelCard>
                <HotelImageWrapper>
                  <HotelImage>
                    <Image
                      src={slide.image}
                      alt={slide.name}
                      width={300}
                      height={300}
                    />
                  </HotelImage>
                </HotelImageWrapper>
                <HotelDescription>
                  <Title as="h3" size="xs" className="text-center lg:text-left">
                    {slide.name}
                  </Title>
                  <Text size="sm" className="text-center lg:text-left">
                    {slide.description}
                  </Text>
                  <Button variant="link" className="mx-auto lg:mx-0">
                    Ver mais detalhes{' '}
                    <Icon icon={ArrowRight} variant="primary" />
                  </Button>
                </HotelDescription>
              </HotelCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute lg:left-[20px] top-1/3 translate-y-1/2 z-10 hidden lg:block">
          <CarouselPrevious />
        </div>
        <div className="absolute lg:right-[20px] top-1/3 translate-y-1/2 z-10 hidden lg:block">
          <CarouselNext />
        </div>
        <CarouselDot />
      </Carousel>
    </Container>
  );
}
