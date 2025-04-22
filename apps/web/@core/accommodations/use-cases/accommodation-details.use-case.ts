import { AccommodationError } from '../accommodation.errors';
import {
  AccommodationDetailSummary,
  AccommodationFeatures,
  IAccommodationService,
} from '../accommodation.interface';

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
        const features = await service.getAccommodationFeatures({
          hotelId,
        });

        return {
          ...accommodation,
          features,
        };
      } catch (error) {
        console.error(error);
        throw new AccommodationError('Error fetching accommodation details');
      }
    },
  };
}
