import { AutoCompleteSearchResponse } from '../../http/accommodation';

export const SearchResultContainer = (item: AutoCompleteSearchResponse) => {
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
