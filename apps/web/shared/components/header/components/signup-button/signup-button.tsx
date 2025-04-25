'use client';
import { Button } from '@coobrastur/ui/components/data-entry/button';

import { Link } from '@components/link';

import { PAGE_NAME } from '@/shared/helpers/page-names';

import { useHeader } from '../../hooks/use-header';

export const SignupButton = ({ light }: { light?: boolean }) => {
  const { isLight } = useHeader({ light });

  return (
    <Button
      variant={isLight ? 'outline-transparent' : 'outline'}
      className="hidden xl:flex"
      asChild
    >
      <Link href={PAGE_NAME.planos}>Assinar Agora</Link>
    </Button>
  );
};
