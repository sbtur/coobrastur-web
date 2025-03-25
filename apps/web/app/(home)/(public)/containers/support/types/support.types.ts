import { IconProps } from '@ui/components/data-display/icon';

export type Support = {
  icon: string | IconProps['icon'];
  title: string;
  description: string;
  href: string;
  target?: string;
};
