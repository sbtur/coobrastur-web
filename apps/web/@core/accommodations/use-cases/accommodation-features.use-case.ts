import { formatTextToCapitalizeCase } from '@/shared/helpers/format-text-to-capitalize-case';
import { FeatureKey, FEATURES_DATA } from '@/shared/utils/data/features';

import { AccommodationError } from '../accommodation.errors';
import { IAccommodationService } from '../accommodation.interface';

export type AccommodationFeatures = {
  id: string;
  name: string;
  icon: string;
};

export function accommodationFeaturesUseCase(service: IAccommodationService) {
  return {
    async exec({
      hotelId,
    }: {
      hotelId: string;
    }): Promise<AccommodationFeatures[]> {
      try {
        const response = await service.getAccommodationFeatures({
          hotelId,
        });

        const features = response.map(({ code, description }) => {
          const feature = FEATURES_DATA[code as FeatureKey];

          return {
            id: code,
            name: formatTextToCapitalizeCase(description),
            icon: feature ? feature.icon : '',
          };
        });

        return features;
      } catch (error) {
        console.error(error);
        throw new AccommodationError('Error fetching accommodation features');
      }
    },
  };
}
