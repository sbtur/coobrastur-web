import { AccommodationError } from '../accommodation.errors';
import {
  AccommodationSearchAutoComplete,
  IAccommodationService,
} from '../accommodation.interface';

export function searchAutoCompleteUseCase(service: IAccommodationService) {
  return {
    async exec(query: string): Promise<AccommodationSearchAutoComplete[]> {
      try {
        const response = await service.getAccommodationsAutoCompleteByQuery({
          query,
        });

        return response;
      } catch (error) {
        console.error(error);
        throw new AccommodationError('Error searching accommodations');
      }
    },
  };
}
