import { AccommodationSearchItem } from '../../types/accommodation-search-item.types';

export const FormatSearchResultItems = (item: AccommodationSearchItem) => {
  return (
    <div className="py-4 hover:bg-secondary-100 cursor-pointer">
      <span className="font-semibold text-base text-neutral-500">
        {item.name}
      </span>
      <br />
      <span className="text-sm text-neutral-400">
        {item.uf}, {item.country}
      </span>
    </div>
  );
};
