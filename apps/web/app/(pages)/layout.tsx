import { ReactNode } from 'react';

import { Header } from '@/shared/components/header';

import '@coobrastur/ui/globals.css';

function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default PagesLayout;
