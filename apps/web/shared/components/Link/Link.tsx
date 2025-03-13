import type { ReactNode } from 'react';
import type { LinkProps as NextLinkProps } from 'next/link';
import LinkNext from 'next/link';

export type LinkProps = NextLinkProps & {
  children: ReactNode;
  className?: string;
};

export const Link = ({ href, children, ...props }: LinkProps) => (
  <LinkNext href={href} {...props}>
    {children}
  </LinkNext>
);
