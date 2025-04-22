'use client';

import { useRouter } from 'next/navigation';

import { Icon, IconWrapper } from '@coobrastur/ui/components/data-display/icon';
import { ChevronLeft } from '@coobrastur/ui/lib/icons';

export const ButtonPageBack = () => {
  const router = useRouter();

  return (
    <IconWrapper
      as="button"
      onClick={() => router.back()}
      className="lg:hidden absolute top-5 left-5 z-10"
    >
      <Icon icon={ChevronLeft} variant="primary" />
    </IconWrapper>
  );
};
