'use client';

import { HotelCard } from '@workspace/ui/components/Blocks/HotelCard';
import { Icon } from '@workspace/ui/components/DataDisplay/Icon';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';
import { ArrowRight } from '@workspace/ui/lib/icons';

import { Image } from '@components/Image';
import { useToggle } from '@hooks/useToggle';

import { HotelResponse } from '../../types/hotels.types';
import { HotelDialog } from '../HotelDialog';

interface HotelListProps {
  hotels: HotelResponse[];
}

export const HotelList = ({ hotels }: HotelListProps) => {
  const { isEnabled, toggle } = useToggle();

  if (isEnabled) return <HotelDialog isOpen={isEnabled} onClose={toggle} />;

  return (
    <>
      <Container className="grid grid-cols-4 gap-2 mt-6">
        {hotels.slice(0, 4).map(hotel => (
          <HotelCard.Root key={hotel.id}>
            <HotelCard.Image>
              <Image src={hotel.image} alt={hotel.name} fill />
            </HotelCard.Image>
            <HotelCard.Description>
              <Title as="h3" size="xs" align="center">
                {hotel.name}
              </Title>
              <Text size="sm" align="center">
                {hotel.street}
              </Text>
              <HotelCard.Button type="button" onClick={toggle}>
                Ver mais detalhes <Icon icon={ArrowRight} variant="primary" />
              </HotelCard.Button>
            </HotelCard.Description>
          </HotelCard.Root>
        ))}
      </Container>
    </>
  );
};
