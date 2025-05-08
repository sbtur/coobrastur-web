import { accommodationInMemory } from '../in-memory/accommodation.in-memory';
import { accommodationService } from './accommodation.service';
import { accommodationAvailableDatesUseCase } from './use-cases/accommodation-available-dates.use-case';
import { accommodationDetailsUseCase } from './use-cases/accommodation-details.use-case';
import { accommodationFeaturesUseCase } from './use-cases/accommodation-features.use-case';
import { accommodationListDetailedUseCase } from './use-cases/accommodation-list-detailed.use-case';
import { accommodationStaticUseCase } from './use-cases/accommodation-static.use-case';
import { listItemUseCase } from './use-cases/list-item.use-case';
import { searchAutoCompleteUseCase } from './use-cases/search-accommodation.use-case';

export function makeAccommodationsUseCase() {
  const service = accommodationService();
  const serviceInMemory = accommodationInMemory();

  return {
    searchAutoCompleteUseCase: searchAutoCompleteUseCase(service),
    accommodationStaticUseCase: accommodationStaticUseCase(service),
    accommodationDetailsUseCase: accommodationDetailsUseCase(service),
    listItemUseCase: listItemUseCase(service),
    accommodationFeaturesUseCase: accommodationFeaturesUseCase(service),
    accommodationListDetailedUseCase:
      accommodationListDetailedUseCase(serviceInMemory),
    accommodationAvailableDatesUseCase:
      accommodationAvailableDatesUseCase(serviceInMemory),
  };
}
