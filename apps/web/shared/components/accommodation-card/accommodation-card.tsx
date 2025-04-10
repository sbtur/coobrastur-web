import { Accommodation } from '@coobrastur/types-shared';
import { Button } from '@coobrastur/ui/components/data-entry/button';

import { Image } from '@components/image';

import {
  HotelCard,
  HotelDescription,
  HotelImage,
  HotelImageWrapper,
} from '@ui/components/data-display/hotel-card';
import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { ArrowRight, Badge } from '@ui/lib/icons';

type HotelCardProps = {
  onClick: (hotelId: number) => void;
  accommodation: Accommodation;
};

export const AccommodationCard = ({
  accommodation,
  onClick,
}: HotelCardProps) => {
  return (
    <HotelCard>
      <HotelImageWrapper>
        <HotelImage>
          <Image
            src={accommodation.image}
            alt={accommodation.name}
            width={315}
            height={416}
          />
        </HotelImage>
      </HotelImageWrapper>
      <HotelDescription>
        <Title as="h3" size="xs" className="text-center lg:text-left">
          {accommodation.name}
        </Title>
        <Text size="sm" className="text-center lg:text-left">
          {accommodation.street}
        </Text>
      </HotelDescription>
      <Button
        variant="link"
        className="mx-auto lg:mx-0 py-0 w-fit lg:mt-auto"
        onClick={() => onClick(accommodation.id)}
      >
        Ver mais detalhes <Icon icon={ArrowRight} variant="highlight" />
      </Button>
    </HotelCard>
  );
};
