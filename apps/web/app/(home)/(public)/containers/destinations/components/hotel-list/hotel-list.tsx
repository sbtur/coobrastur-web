import { Image } from '@components/image';

import { DestinationResponse } from '../../types/destination.types';

import { Bookmark } from '@ui/components/data-display/bookmark';
import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';
import {
  HotelButton,
  HotelCard,
  HotelDescription,
  HotelImage,
  HotelImageIcon,
  HotelImageWrapper,
} from '@ui/components/data-display/hotel-card';
import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Section } from '@ui/components/layouts/section';
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
              <HotelCard>
                <HotelImageWrapper>
                  <HotelImageIcon>
                    <Bookmark
                      onClick={() => console.log('Saved to favorites')}
                    />
                  </HotelImageIcon>

                  <HotelImage size="sm">
                    <Image
                      src={hotel.image}
                      alt={hotel.city.name}
                      width={256}
                      height={256}
                    />
                  </HotelImage>
                </HotelImageWrapper>
                <HotelDescription>
                  <Title as="h3" size="xs" align="center">
                    {hotel.city.name}
                  </Title>
                  <Text size="sm" align="center">
                    {hotel.state.name}
                  </Text>
                  <HotelButton type="link" href="#" className="justify-center">
                    Ver mais detalhes{' '}
                    <Icon icon={ArrowRight} variant="primary" />
                  </HotelButton>
                </HotelDescription>
              </HotelCard>
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
