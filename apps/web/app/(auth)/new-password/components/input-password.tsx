'use client';

import { useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

import { Eye, EyeOff } from 'lucide-react';

import { Text } from '@ui/components/data-display/text';
import { Input } from '@ui/components/data-entry/input';

interface InputPasswordProps<T extends Record<string, any>> {
  id: string;
  placeholder: string;
  register?: UseFormRegister<T>;
  error?: string;
}

export function InputPassword<T extends Record<string, any>>({
  id,
  placeholder,
  register,
  error,
}: InputPasswordProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        id={id}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        {...(register ? register(id as Path<T>) : {})}
      />
      {error && <Text className="text-red-500">{error}</Text>}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        {showPassword ? (
          <Eye className="h-4 w-4 text-muted-foreground" />
        ) : (
          <EyeOff className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </div>
  );
}
