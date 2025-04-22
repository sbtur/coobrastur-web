import * as React from 'react';

import { AlertTriangle, Check, Info, X } from 'lucide-react';

import { type AlertVariants, alertVariants } from './alert-variants';

import { cn } from '@ui/lib/utils';

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AlertVariants {
  children: React.ReactNode;
  className?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, children, ...props }, ref) => {
    const Icon = {
      default: null,
      danger: X,
      warning: AlertTriangle,
      success: Check,
      info: Info,
    }[variant || 'default'];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
        <div className="flex-1">{children}</div>
      </div>
    );
  },
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertDescription, AlertTitle };
