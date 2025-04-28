export const BADGE_VARIANTS = {
  default: 'default',
  secondary: 'secondary',
  outline: 'outline',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  neutral: 'neutral',
  gold: 'gold',
  silver: 'silver',
  diamond: 'diamond',
  vip: 'vip',
  master: 'master',
} as const;

export type BadgeVariant = keyof typeof BADGE_VARIANTS;
