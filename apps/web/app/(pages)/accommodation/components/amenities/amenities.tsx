import { Text } from '@coobrastur/ui/components/data-display/text';

import { Image } from '@/shared/components/image';
import { AMENITIES_DATA, AmenityKey } from '@/shared/helpers/data/amenities';

type AmenitiesProps = {
  amenities: AmenityKey[];
};

export const Amenities = ({ amenities }: AmenitiesProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {amenities.map(amenity => (
        <Text
          key={AMENITIES_DATA[amenity].name}
          className="flex items-center gap-1"
        >
          <Image
            src={AMENITIES_DATA[amenity].icon}
            width={24}
            height={24}
            alt={AMENITIES_DATA[amenity].name}
          />
          {AMENITIES_DATA[amenity].name}
        </Text>
      ))}
    </div>
  );
};
