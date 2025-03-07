import { IconProps } from '@coobrastur/ui/components/DataDisplay/Icon';

export type Support = {
  icon: string | IconProps['icon'];
  title: string;
  description: string;
  href: string;
  target?: string;
};
