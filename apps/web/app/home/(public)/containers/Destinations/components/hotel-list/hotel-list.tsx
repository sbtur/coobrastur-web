import { Image } from '@components/image';

import { DestinationResponse } from '../../types/destination.types';

import { HotelCard } from '@ui/components/Blocks/HotelCard';
import { Bookmark } from '@ui/components/data-display/bookmark';
import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';
import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Section } from '@ui/components/Layouts/Section';
import { ArrowRight } from '@ui/lib/icons';

interface HotelListProps {
  hotels: DestinationResponse[];
}

export const HotelList = ({ hotels }: HotelListProps) => {
  return (
    <Section className="md:px-4">
      <Carousel className="h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {hotels.map(hotel => (
            <CarouselItem
              key={hotel.id}
              className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
            >
              <HotelCard.Root>
                <HotelCard.ImageWrapper>
                  <>
                    <HotelCard.ImageIcon>
                      <Bookmark
                        onClick={() => console.log('Saved to favorites')}
                      />
                    </HotelCard.ImageIcon>

                    <HotelCard.Image size="sm">
                      <Image
                        src={hotel.image}
                        alt={hotel.city.name}
                        width={256}
                        height={256}
                      />
                    </HotelCard.Image>
                  </>
                </HotelCard.ImageWrapper>
                <HotelCard.Description>
                  <Title as="h3" size="xs" align="center">
                    {hotel.city.name}
                  </Title>
                  <Text size="sm" align="center">
                    {hotel.state.name}
                  </Text>
                  <HotelCard.Button
                    type="link"
                    href="#"
                    className="justify-center"
                  >
                    Ver mais detalhes{' '}
                    <Icon icon={ArrowRight} variant="primary" />
                  </HotelCard.Button>
                </HotelCard.Description>
              </HotelCard.Root>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3" />
        <CarouselNext className="right-3" />
        <CarouselDot />
      </Carousel>
    </Section>
  );
};
