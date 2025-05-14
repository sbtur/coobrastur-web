import { FiltersLarger } from './filters-larger';
import { FiltersMobile } from './filters-mobile';

export const Filters = () => {
  return (
    <>
      <div className="lg:hidden">
        <FiltersMobile />
      </div>
      <div className="hidden lg:block">
        <FiltersLarger />
      </div>
    </>
  );
};
