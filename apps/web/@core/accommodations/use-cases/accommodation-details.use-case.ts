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
          id: accommodation.Id.toString(),
          name: formatTextToCapitalizeCase(accommodation.Name),
          address: formatTextToCapitalizeCase(accommodation.Address),
          phone: accommodation.Phone,
          email: accommodation.Email,
          site: accommodation.Site,
          free: accommodation.Free,
          coordinates: {
            latitude: accommodation.Coordinates.Latitude,
            longitude: accommodation.Coordinates.Longitude,
          },
          images: accommodation.Images,
          description: accommodation.AdditionalInfo.InfoB,
          additionalInfo: accommodation.AdditionalInfo.InfoA,
          features,
        };
      } catch (error) {
        console.error(error);
        throw new AccommodationError('Error fetching accommodation details');
      }
    },
  };
}
