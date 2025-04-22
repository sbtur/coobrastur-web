import { AccommodationError } from '../accommodation.errors';
import {
  AccommodationSearchByCity,
  IAccommodationService,
} from '../accommodation.interface';

export function listItemUseCase(service: IAccommodationService) {
  return {
    async exec({
      cityId,
    }: {
      cityId: string;
    }): Promise<AccommodationSearchByCity[]> {
      try {
        const accommodations = await service.getAccommodationsByCityId({
          cityId,
        });

        return accommodations;
      } catch (error: unknown) {
        console.error(error);
        throw new AccommodationError('Error fetching accommodations');
      }
    },
  };
}
