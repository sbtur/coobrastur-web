import { AccommodationError } from '../accommodation.errors';
import { IAccommodationService } from '../accommodation.interface';

export type AccommodationSearchByCity = {
  id: string;
  name: string;
  address: string;
  city?: string;
  state?: string;
  image: string;
};

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

        return accommodations.map(accommodation => ({
          id: accommodation.hotCode,
          name: accommodation.commercialName,
          address: accommodation.address,
          city: accommodation.city,
          state: accommodation.state,
          image: accommodation.photo,
        }));
      } catch (error: unknown) {
        console.error(error);
        throw new AccommodationError('Error fetching accommodations');
      }
    },
  };
}
