import { Text } from '@coobrastur/ui/components/data-display/text';

import { AccommodationFeatures } from '@/app/(pages)/search-place/http/accommodation';
import { Image } from '@/shared/components/image';

type FeaturesProps = {
  features: AccommodationFeatures[];
};

export const Features = ({ features }: FeaturesProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {features.map(feature => (
        <Text key={feature.name} className="flex items-center gap-1">
          <Image src={feature.icon} width={24} height={24} alt={feature.name} />
          {feature.name}
        </Text>
      ))}
    </div>
  );
};
