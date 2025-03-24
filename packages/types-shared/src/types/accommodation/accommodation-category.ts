import { CATEGORY_LABELS } from 'src/constants/categories';

export type AccommodationCategory =
  (typeof CATEGORY_LABELS)[keyof typeof CATEGORY_LABELS];
