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
          id: accommodation.codigo,
          name: accommodation.texto,
          state: accommodation.estado,
          city: accommodation.cidade,
          type: accommodation.tipo === 'Cidade' ? 'city' : 'hotel',
        }));
      } catch (error) {
        console.error(error);
        throw new AccommodationError('Error searching accommodations');
      }
    },
  };
}
