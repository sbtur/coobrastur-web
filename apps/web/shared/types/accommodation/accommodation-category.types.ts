import { BadgeVariant } from '@ui/components/DataDisplay/Badge/contants';

export const CATEGORY_LABELS = {
  GOLD: 'Gold',
  SILVER: 'Silver',
  VIP: 'Vip',
  DIAMANTE: 'Diamante',
} as const;

export const CATEGORY_COLORS: Record<
  (typeof CATEGORY_LABELS)[keyof typeof CATEGORY_LABELS],
  BadgeVariant
> = {
  [CATEGORY_LABELS.GOLD]: 'warning',
  [CATEGORY_LABELS.SILVER]: 'neutral',
  [CATEGORY_LABELS.VIP]: 'success',
  [CATEGORY_LABELS.DIAMANTE]: 'default',
};
