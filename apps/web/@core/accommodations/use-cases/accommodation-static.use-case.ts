import { AccommodationError } from '../accommodation.errors';
import {
  AccommodationSearchByCity,
  IAccommodationService,
} from '../accommodation.interface';

export function accommodationStaticUseCase(service: IAccommodationService) {
  return {
    async exec({
      hotelIds,
    }: {
      hotelIds: string[];
    }): Promise<AccommodationSearchByCity[]> {
      try {
        const accommodationsList = [];

        for await (const hotelId of hotelIds) {
          const accommodation = await service.getAccommodationDetail({
            hotelId,
          });
          accommodationsList.push(
            service.toAccommodationStaticList(accommodation),
          );
        }

        return accommodationsList;
      } catch (error) {
        console.error(error);
        throw new AccommodationError('Error fetching accommodations');
      }
    },
  };
}
