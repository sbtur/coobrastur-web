import { ReactElement, ReactNode } from 'react';

import { Icon, IconWrapper } from '@ui/components/DataDisplay/Icon';
import { ChevronLeft, ChevronRight } from '@ui/lib/icons';
import { cn } from '@ui/lib/utils';

export interface CarousselButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactElement;
  onClick: () => void;
}

export interface CarousselButtonWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

interface ButtonBaseProps {
  children: ReactElement;
  className?: string;
}

const ButtonBase = ({ children, className, ...props }: ButtonBaseProps) => {
  return (
    <IconWrapper
      as="button"
      className={cn(
        'shadow-none absolute z-10 top-1/2 -translate-y-1/2 disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </IconWrapper>
  );
};
export const ButtonPrevious = ({
  className,
  children,
  ...props
}: CarousselButtonProps) => {
  const Component = children || (
    <Icon icon={ChevronLeft} size="lg" variant="neutral" />
  );

  return (
    <ButtonBase className={cn('left-0', className)} {...props}>
      {Component}
    </ButtonBase>
  );
};

export const ButtonNext = ({
  className,
  children,
  ...props
}: CarousselButtonProps) => {
  const Component = children || (
    <Icon icon={ChevronRight} size="lg" variant="neutral" />
  );

  return (
    <ButtonBase className={cn('right-0', className)} {...props}>
      {Component}
    </ButtonBase>
  );
};

export const ButtonWrapper = ({
  className,
  children,
  ...props
}: CarousselButtonWrapperProps) => {
  return (
    <div
      className={cn('items-center justify-between flex', className)}
      {...props}
    >
      {children}
    </div>
  );
};
