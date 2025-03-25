import type { ReactNode } from 'react';
import type { LinkProps as NextLinkProps } from 'next/link';
import LinkNext from 'next/link';

import {
  Link as LinkUI,
  type LinkProps as LinkUIProps,
} from '@ui/components/data-entry/link';

export type LinkProps = NextLinkProps &
  LinkUIProps & {
    children: ReactNode;
    className?: string;
  };

export const Link = ({ href, children, ...props }: LinkProps) => (
  <LinkUI {...props} asChild>
    <LinkNext href={href} {...props}>
      {children}
    </LinkNext>
  </LinkUI>
);
