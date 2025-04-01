import { forwardRef } from 'react';

import { Button as ButtonComp, ButtonProps } from '@ui/components/button';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <ButtonComp ref={ref} {...props}>
        {children}
      </ButtonComp>
    );
  },
);

Button.displayName = 'Button';
