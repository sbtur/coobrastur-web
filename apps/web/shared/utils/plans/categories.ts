import type { BadgeVariant } from '@coobrastur/ui/components/data-display/badge/contants';

export const CATEGORY_LABELS = {
  Gold: 'Gold',
  Silver: 'Silver',
  Diamond: 'Diamond',
} as const;

export const CATEGORY_COLORS: Record<
  (typeof CATEGORY_LABELS)[keyof typeof CATEGORY_LABELS],
  BadgeVariant
> = {
  [CATEGORY_LABELS.Gold]: 'gold',
  [CATEGORY_LABELS.Silver]: 'silver',
  [CATEGORY_LABELS.Diamond]: 'diamond',
} as const;

export type CATEGORY = keyof typeof CATEGORY_LABELS;
