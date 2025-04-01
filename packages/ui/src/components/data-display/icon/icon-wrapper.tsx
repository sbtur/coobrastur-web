import { forwardRef } from 'react';

import { cn } from '@ui/lib/utils';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonWrapperProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as: 'button';
  };

type DivWrapperProps = BaseProps &
  React.HTMLAttributes<HTMLDivElement> & {
    as?: 'div';
  };

export type IconWrapperProps = ButtonWrapperProps | DivWrapperProps;

export const IconWrapper = forwardRef<
  HTMLDivElement | HTMLButtonElement,
  IconWrapperProps
>(({ children, className, as = 'div', ...props }, ref) => {
  const Component = as;

  return (
    <Component
      ref={ref}
      className={cn(
        'w-fit h-fit p-3 flex items-center justify-center appearance-none border-0 rounded-full bg-white transition-colors shadow-xl text-xs text-text',
        className,
      )}
      {...(props as any)}
    >
      {children}
    </Component>
  );
});

IconWrapper.displayName = 'IconWrapper';
