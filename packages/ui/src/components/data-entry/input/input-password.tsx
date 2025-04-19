'use client';

import React, { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { Input } from '@ui/components/data-entry/input';

export const InputPassword = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        className={className}
        ref={ref}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        {showPassword ? (
          <Eye className="h-4 w-4 text-neutral-400" />
        ) : (
          <EyeOff className="h-4 w-4 text-neutral-400" />
        )}
      </button>
    </div>
  );
});

InputPassword.displayName = 'InputPassword';
