import { BadgeVariant } from '@coobrastur/ui/components/data-display/badge/contants';

export const COMPANY_PLANS = {
  VIP: 'Vip',
  MASTER: 'Master',
} as const;

export const COMPANY_PLANS_COLORS: Record<
  (typeof COMPANY_PLANS)[keyof typeof COMPANY_PLANS],
  BadgeVariant
> = {
  [COMPANY_PLANS.VIP]: 'vip',
  [COMPANY_PLANS.MASTER]: 'master',
};

export type COMPANY_PLAN = keyof typeof COMPANY_PLANS;
