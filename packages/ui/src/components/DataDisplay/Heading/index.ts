import { Text } from '../Text';
import { Title } from '../Title';
import { Heading as Root, type HeadingProps } from './Heading';

export type { HeadingProps };

export const Heading = {
  Root,
  Title,
  Text,
} as const;
