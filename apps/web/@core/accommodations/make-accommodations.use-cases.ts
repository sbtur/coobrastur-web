import { accommodationService } from './accommodation.service';
import { accommodationDetailsUseCase } from './use-cases/accommodation-details.use-case';
import { accommodationFeaturesUseCase } from './use-cases/accommodation-features.use-case';
import { accommodationStaticUseCase } from './use-cases/accommodation-static.use-case';
import { listItemUseCase } from './use-cases/list-item.use-case';
import { searchAutoCompleteUseCase } from './use-cases/search-accommodation.use-case';

export function makeAccommodationsUseCase() {
  const service = accommodationService();

  return {
    searchAutoCompleteUseCase: searchAutoCompleteUseCase(service),
    accommodationStaticUseCase: accommodationStaticUseCase(service),
    accommodationDetailsUseCase: accommodationDetailsUseCase(service),
    listItemUseCase: listItemUseCase(service),
    accommodationFeaturesUseCase: accommodationFeaturesUseCase(service),
  };
}
