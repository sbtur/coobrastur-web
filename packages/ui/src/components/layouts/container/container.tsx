import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@ui/lib/utils';

type ContainerElement = 'div' | 'header' | 'section' | 'main' | 'footer';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ContainerElement;
  children: ReactNode;
  className?: string;
}

export const Container = ({
  as: Element = 'div',
  className,
  children,
}: ContainerProps) => {
  return (
    <Element className={cn('max-w-[1440px] px-3 mx-auto relative', className)}>
      {children}
    </Element>
  );
};
