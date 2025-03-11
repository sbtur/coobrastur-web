export const BADGE_VARIANTS = {
  default: 'default',
  secondary: 'secondary',
  outline: 'outline',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
} as const;
export type BadgeVariant = keyof typeof BADGE_VARIANTS;
