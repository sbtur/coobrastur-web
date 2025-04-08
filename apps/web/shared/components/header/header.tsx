'use client';

import { useHeader } from './hooks/use-header';

type HeaderProps = {
  light?: boolean;
  children: React.ReactNode;
};

export function Header({ light = false, children }: HeaderProps) {
  const { isScrolled, isLight } = useHeader({ light });

  return (
    <header
      className={`sticky top-0 transition-all duration-200 z-50 bg-white ${isLight && !isScrolled ? 'isLight' : ''} ${isScrolled ? 'shadow-md' : ''}`}
    >
      {children}
    </header>
  );
}
