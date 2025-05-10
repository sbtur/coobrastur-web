import { formatTextToCapitalizeCase } from '@/shared/helpers/format-text-to-capitalize-case';

import { AccommodationError } from '../accommodation.errors';
import { IAccommodationService } from '../accommodation.interface';
import { makeAccommodationsUseCase } from '../make-accommodations.use-cases';
import { AccommodationFeatures } from './accommodation-features.use-case';

export type AccommodationDetailSummary = {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  site: string;
  free: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  images: string[];
  description: string;
  additionalInfo: string;
};

export type AccommodationDetail = AccommodationDetailSummary & {
  features: AccommodationFeatures[];
};

export function accommodationDetailsUseCase(service: IAccommodationService) {
  return {
    async exec({ hotelId }: { hotelId: string }): Promise<AccommodationDetail> {
      try {
        const accommodation = await service.getAccommodationDetail({
          hotelId,
        });

        const features =
          await makeAccommodationsUseCase().accommodationFeaturesUseCase.exec({
            hotelId,
          });

        return {
          id: accommodation.id.toString(),
          name: formatTextToCapitalizeCase(accommodation.name),
          address: formatTextToCapitalizeCase(accommodation.address),
          phone: accommodation.phone,
          email: accommodation.email,
          site: accommodation.site,
          free: accommodation.free,
          coordinates: {
            latitude: accommodation.coordinates.latitude,
            longitude: accommodation.coordinates.longitude,
          },
          images: accommodation.images,
          description: accommodation.additionalInfo.infoB,
          additionalInfo: accommodation.additionalInfo.infoA,
          features,
        };
      } catch (error) {
        console.error(error);
        throw new AccommodationError('Error fetching accommodation details');
      }
    },
  };
}
