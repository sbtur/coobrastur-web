import { ReactNode } from 'react';

import { Header } from '@/shared/components/header';

import '@coobrastur/ui/globals.css';

import { Wrapper } from '@ui/components/layouts/wrapper';

function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

export default PagesLayout;
