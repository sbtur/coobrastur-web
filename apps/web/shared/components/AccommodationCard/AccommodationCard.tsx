import { Accommodation, CATEGORY_COLORS } from '@coobrastur/types-shared';

import { Image } from '@components/Image';

import { Badge } from '@ui/components/DataDisplay/Badge';
import { Bookmark } from '@ui/components/DataDisplay/Bookmark';
import {
  HotelButton,
  HotelCard,
  HotelDescription,
  HotelImage,
  HotelImageIcon,
  HotelImageWrapper,
} from '@ui/components/DataDisplay/HotelCard';
import { Icon } from '@ui/components/DataDisplay/Icon';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
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
        <>
          <HotelImageIcon>
            <Bookmark onClick={() => console.log('Saved to favorites')} />
          </HotelImageIcon>
          <HotelImage>
            <Image
              src={accommodation.image}
              alt={accommodation.name}
              width={315}
              height={416}
            />
          </HotelImage>
        </>
      </HotelImageWrapper>
      <HotelDescription>
        {accommodation.category && (
          <Badge
            variant={CATEGORY_COLORS[accommodation.category]}
            className="mx-auto"
          >
            {accommodation.category}
          </Badge>
        )}
        <Title as="h3" size="xs" align="center">
          {accommodation.name}
        </Title>
        <Text size="sm" align="center">
          {accommodation.street}
        </Text>
        <HotelButton type="button" onClick={() => onClick(accommodation.id)}>
          Ver mais detalhes <Icon icon={ArrowRight} variant="primary" />
        </HotelButton>
      </HotelDescription>
    </HotelCard>
  );
};
