import { AccommodationError } from '../accommodation.errors';
import { IAccommodationService } from '../accommodation.interface';

export type AccommodationSearchAutoComplete = {
  id: string;
  name: string;
  state: string;
  city: string;
  type: 'city' | 'hotel';
};

export function searchAutoCompleteUseCase(service: IAccommodationService) {
  return {
    async exec(query: string): Promise<AccommodationSearchAutoComplete[]> {
      try {
        const response = await service.getAccommodationsAutoCompleteByQuery({
          query,
        });

        return response.map(accommodation => ({
          id: accommodation.Codigo,
          name: accommodation.Texto,
          state: accommodation.Estado,
          city: accommodation.Cidade,
          type: accommodation.Tipo === 'Cidade' ? 'city' : 'hotel',
        }));
      } catch (error) {
        console.error(error);
        throw new AccommodationError('Error searching accommodations');
      }
    },
  };
}
