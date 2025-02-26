import { ReactElement, ReactNode } from 'react';

import { Icon, IconWrapper } from '@workspace/ui/components/DataDisplay/Icon';
import { ChevronLeft, ChevronRight } from '@workspace/ui/lib/icons';
import { cn } from '@workspace/ui/lib/utils';

export interface CarousselButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactElement;
  onClick: () => void;
}

export interface CarousselButtonWrapperProps {
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
      className={cn('shadow-none', className)}
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
    <Icon icon={ChevronLeft} size="lg" variant="primary" />
  );

  return (
    <ButtonBase className={cn(className)} {...props}>
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
    <ButtonBase className={cn(className)} {...props}>
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
      className={cn(
        'absolute z-10 top-1/2 -translate-y-1/2 w-full flex items-center justify-between',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
