import { ReactNode } from 'react';

import { Footer } from '@/shared/components/footer';
import { HeaderPublic } from '@/shared/components/header';

import '@coobrastur/ui/globals.css';

function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderPublic />
      {children}
      <Footer />
    </>
  );
}

export default PagesLayout;
