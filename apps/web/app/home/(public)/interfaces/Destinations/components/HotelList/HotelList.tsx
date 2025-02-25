import { HotelCard } from '@workspace/ui/components/Blocks/HotelCard';
import { Icon } from '@workspace/ui/components/DataDisplay/Icon';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';
import { ArrowRight } from '@workspace/ui/lib/icons';

import { Image } from '@components/Image';

import { DestinationResponse } from '../../types/destination.types';

interface HotelListProps {
  hotels: DestinationResponse[];
}

export const HotelList = ({ hotels }: HotelListProps) => {
  return (
    <>
      <Container className="grid grid-cols-5 gap-2 mt-6">
        {hotels.slice(0, 5).map(hotel => (
          <HotelCard.Root key={hotel.id}>
            <HotelCard.Image size="sm">
              <Image src={hotel.image} alt={hotel.city.name} fill />
            </HotelCard.Image>
            <HotelCard.Description>
              <Title as="h3" size="xs" align="center">
                {hotel.city.name}
              </Title>
              <Text size="sm" align="center">
                {hotel.country.name}
              </Text>
              <HotelCard.Button
                type="link"
                href={hotel.absolute_url}
                className="justify-center"
              >
                Saiba mais <Icon icon={ArrowRight} variant="primary" />
              </HotelCard.Button>
            </HotelCard.Description>
          </HotelCard.Root>
        ))}
      </Container>
    </>
  );
};

{
  /* {DESTINATIONS.slice(0, 5).map(hotel => (
            <HotelCard
              size="sm"
              key={hotel.id}
              address={hotel.state.name}
              href={hotel.absolute_url}
              image={{
                alt: hotel.city.name,
                src: hotel.image,
              }}
              title={hotel.city.name}
              actionLabel="Saiba mais"
            />
          ))} */
}
