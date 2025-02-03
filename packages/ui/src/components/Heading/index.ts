import { Heading as Root, type HeadingProps } from './Heading';
import { HeadingText } from './Heading.Text';

import { Title } from '@workspace/ui/components/Title/Title';

export type { HeadingProps };

export const Heading = {
  Root,
  Title,
  Text: HeadingText,
} as const;
