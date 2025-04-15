'use client';
import { HeaderPublic } from '@/shared/components/header';
import { ResponsiveLargerThan } from '@/shared/components/responsive';

export function HeaderLarge() {
  return (
    <ResponsiveLargerThan breakpoint="lg">
      <HeaderPublic />
    </ResponsiveLargerThan>
  );
}
