'use client';
import {
  ResponsiveLargerThan,
  ResponsiveSmallerThan,
} from '@/shared/components/responsive/responsive';

import { FiltersLarger } from './filters-larger';
import { FiltersMobile } from './filters-mobile';

export const Filters = () => {
  return (
    <>
      <ResponsiveSmallerThan breakpoint="lg">
        <FiltersMobile />
      </ResponsiveSmallerThan>

      <ResponsiveLargerThan breakpoint="lg">
        <FiltersLarger />
      </ResponsiveLargerThan>
    </>
  );
};
