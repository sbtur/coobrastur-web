import { cn } from '@workspace/ui/lib/utils';
import { type HTMLAttributes } from 'react';

type ContainerElement = 'div' | 'header' | 'section' | 'main' | 'footer';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ContainerElement;
  children: React.ReactNode;
  className?: string;
}

export const Container = ({
  as: Element = 'div',
  className,
  children,
}: ContainerProps) => {
  return (
    <Element
      className={cn(
        'w-full xl:w-[1140px] 2xl:w-[1280px] mx-auto flex items-center justify-between',
        className
      )}
    >
      {children}
    </Element>
  );
};
