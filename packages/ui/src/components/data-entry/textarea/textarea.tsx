import * as React from 'react';

import { cn } from '@ui/lib/utils';

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        className,
        'border-2 border-neutral-200 rounded-lg min-h-[120px] resize-none focus:border-neutral-300 focus:ring-0 p-2 focus:outline-neutral-300'
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';
