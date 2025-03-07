import type { ReactNode } from 'react';
import type { LinkProps as NextLinkProps } from 'next/link';
import LinkNext from 'next/link';

import {
  Link as LinkUI,
  type LinkProps as LinkUIProps,
} from '@ui/components/DataEntry/Link';

export type LinkProps = Omit<
  NextLinkProps,
  'as' | 'passHref' | 'legacyBehavior'
> &
  LinkUIProps & {
    children: ReactNode;
    className?: string;
  };

export const Link = ({ href, children, ...props }: LinkProps) => (
  <LinkNext href={href} passHref legacyBehavior {...props}>
    <LinkUI {...props}>{children}</LinkUI>
  </LinkNext>
);
