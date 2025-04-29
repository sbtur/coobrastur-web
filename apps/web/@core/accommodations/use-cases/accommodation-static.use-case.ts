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
            id: accommodation.id.toString(),
            name: accommodation.name,
            address: accommodation.address,
            image: accommodation.images[0] || '',
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
