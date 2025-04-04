import { ReactNode } from 'react';

import { HeaderPublic } from '@/shared/components/header';

import '@coobrastur/ui/globals.css';

function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderPublic />
      {children}
    </>
  );
}

export default PagesLayout;
