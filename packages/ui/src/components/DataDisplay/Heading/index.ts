import { Title } from '../Title';
import { Heading as Root, type HeadingProps } from './Heading';
import { HeadingText } from './Heading.Text';

export type { HeadingProps };

export const Heading = {
  Root,
  Title,
  Text: HeadingText,
} as const;
