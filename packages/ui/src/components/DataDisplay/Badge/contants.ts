export const BADGE_VARIANTS = {
  default: 'default',
  secondary: 'secondary',
  outline: 'outline',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  neutral: 'neutral',
} as const;
export type BadgeVariant = keyof typeof BADGE_VARIANTS;
