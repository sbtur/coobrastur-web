import { Accommodation, CATEGORY_COLORS } from '@coobrastur/types-shared';
import { Button } from '@coobrastur/ui/components/data-entry/button';

import { Image } from '@components/image';

import { Badge } from '@ui/components/data-display/badge';
import { Bookmark } from '@ui/components/data-display/bookmark';
import {
  HotelCard,
  HotelDescription,
  HotelImage,
  HotelImageIcon,
  HotelImageWrapper,
} from '@ui/components/data-display/hotel-card';
import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { ArrowRight } from '@ui/lib/icons';

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
        <Title as="h3" size="xs">
          {accommodation.name}
        </Title>
        <Text size="sm">{accommodation.street}</Text>
        <Button variant="link" onClick={() => onClick(accommodation.id)}>
          Ver mais detalhes <Icon icon={ArrowRight} variant="primary" />
        </Button>
      </HotelDescription>
    </HotelCard>
  );
};
