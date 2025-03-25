import { Image } from '@components/Image';

import { Accommodation } from '@shared/types/accommodation/accommodation.types';
import { CATEGORY_COLORS } from '@shared/types/accommodation/accommodation-category.types';
import { HotelCard as HotelCardUI } from '@ui/components/Blocks/HotelCard';
import { Badge } from '@ui/components/DataDisplay/Badge';
import { Bookmark } from '@ui/components/DataDisplay/Bookmark';
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
    <HotelCardUI.Root>
      <HotelCardUI.ImageWrapper>
        <>
          <HotelCardUI.ImageIcon>
            <Bookmark onClick={() => console.log('Saved to favorites')} />
          </HotelCardUI.ImageIcon>
          <HotelCardUI.Image>
            <Image
              src={accommodation.image}
              alt={accommodation.name}
              width={315}
              height={416}
            />
          </HotelCardUI.Image>
        </>
      </HotelCardUI.ImageWrapper>
      <HotelCardUI.Description>
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
        <HotelCardUI.Button
          type="button"
          onClick={() => onClick(accommodation.id)}
        >
          Ver mais detalhes <Icon icon={ArrowRight} variant="primary" />
        </HotelCardUI.Button>
      </HotelCardUI.Description>
    </HotelCardUI.Root>
  );
};
