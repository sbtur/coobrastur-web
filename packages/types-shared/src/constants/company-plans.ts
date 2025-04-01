import { BadgeVariant } from 'src/types';

export const COMPANY_PLANS = {
  VIP: 'Vip',
  MASTER: 'Master',
} as const;

export const COMPANY_PLANS_COLORS: Record<
  (typeof COMPANY_PLANS)[keyof typeof COMPANY_PLANS],
  BadgeVariant
> = {
  [COMPANY_PLANS.VIP]: 'success',
  [COMPANY_PLANS.MASTER]: 'warning',
};
