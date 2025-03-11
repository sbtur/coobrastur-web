export const BUTTON_VARIANTS = {
  default: 'default',
  secondary: 'secondary',
  danger: 'danger',
  outline: 'outline',
  ghost: 'ghost',
  success: 'success',
  warning: 'warning',
  white: 'white',
  'outline-white': 'outline-white',
  link: 'link',
} as const;

export const BUTTON_SIZES = {
  default: 'default',
  sm: 'sm',
  lg: 'lg',
  icon: 'icon',
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
export type ButtonSize = keyof typeof BUTTON_SIZES;
