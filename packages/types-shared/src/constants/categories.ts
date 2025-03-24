import { BadgeVariant } from 'src/types';

export const CATEGORY_LABELS = {
  GOLD: 'Gold',
  SILVER: 'Silver',
  DIAMANTE: 'Diamante',
} as const;

export const CATEGORY_COLORS: Record<
  (typeof CATEGORY_LABELS)[keyof typeof CATEGORY_LABELS],
  BadgeVariant
> = {
  [CATEGORY_LABELS.GOLD]: 'warning',
  [CATEGORY_LABELS.SILVER]: 'neutral',
  [CATEGORY_LABELS.DIAMANTE]: 'default',
};
