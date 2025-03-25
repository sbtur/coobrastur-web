export const LINK_VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  white: 'white',
  neutral: 'neutral',
} as const;
export type LinkVariant = keyof typeof LINK_VARIANTS;
