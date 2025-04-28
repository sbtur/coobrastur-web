import { AccommodationError } from '../accommodation.errors';
import { IAccommodationService } from '../accommodation.interface';
import { AccommodationSearchByCity } from './list-item.use-case';

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
          accommodationsList.push({
            id: accommodation.Id.toString(),
            name: accommodation.Name,
            address: accommodation.Address,
            image: accommodation.Images[0] || '',
          });
        }

        return accommodationsList;
      } catch (error) {
        console.error(error);
        throw new AccommodationError('Error fetching accommodations');
      }
    },
  };
}
