import { AccommodationSearchAutoComplete } from '@core/accommodations/use-cases/search-accommodation.use-case';

export const SearchResultContainer = (
  item: AccommodationSearchAutoComplete,
) => {
  return (
    <div className="py-4 hover:bg-secondary-100 cursor-pointer">
      <span className="font-semibold text-base text-neutral-500">
        {item.name}
      </span>
      <br />
      <span className="text-sm text-neutral-400">
        {item.state}, {item.city}
      </span>
    </div>
  );
};
