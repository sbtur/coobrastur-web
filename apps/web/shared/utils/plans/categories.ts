import type { BadgeVariant } from '@coobrastur/ui/components/data-display/badge/contants';

export const CATEGORY_LABELS = {
  GOLD: 'Gold',
  SILVER: 'Silver',
  DIAMANTE: 'Diamante',
} as const;

export const CATEGORY_COLORS: Record<
  (typeof CATEGORY_LABELS)[keyof typeof CATEGORY_LABELS],
  BadgeVariant
> = {
  [CATEGORY_LABELS.GOLD]: 'gold',
  [CATEGORY_LABELS.SILVER]: 'silver',
  [CATEGORY_LABELS.DIAMANTE]: 'diamond',
} as const;

export type CATEGORY = keyof typeof CATEGORY_LABELS;
