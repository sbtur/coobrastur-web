// import CarouselComponent from '@ui/components/data-display/caroussel';
import Image from 'next/image';

import { ArrowRightIcon } from 'lucide-react';

import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';

import { CarrouselDetails } from './carrousel-details';

import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';
import { Container } from '@ui/components/layouts/container';

export function CarousselPrivate() {
  return (
    <Container className="md:h-[450px] py-8 bg-gray-100 flex flex-col md:flex-row gap-1">
      <div className="w-full flex flex-col md:flex-row gap-1">
        <Carousel className="w-full md:w-3/4 relative">
          <CarouselContent>
            <CarouselItem className="relative">
              <Image
                src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
                alt="Imagem de exemplo"
                width={800}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start lg:pt-[100px] pt-[20px] gap-2 bg-black/30 lg:pl-[100px] pl-[50px]">
                <Badge variant="warning">Lorem</Badge>
                <Title size="md" className="text-white">
                  Lorem ipsum dolor
                </Title>
                <Text className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <Button variant="outline-white">
                  Quero viajar <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
            <CarouselDot />
          </div>
          <div className="absolute lg:left-[50px] top-1/2 translate-y-1/2 z-10">
            <CarouselPrevious className="hidden md:block" />
          </div>
          <div className="absolute md:right-[50px] top-1/2 translate-y-1/2 z-10">
            <CarouselNext className="hidden md:block" />
          </div>
        </Carousel>

        <div className="w-full md:w-1/4 hidden md:block">
          <CarrouselDetails />
        </div>
      </div>
    </Container>
  );
}
