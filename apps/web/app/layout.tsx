import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { Wrapper } from '@coobrastur/ui/components/Layouts/Wrapper';

import { Providers } from '@providers';

import '@coobrastur/ui/globals.css';

export const metadata: Metadata = {
  title: 'Coobrastur',
  description: 'Coobrastur',
};

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>
          <Wrapper>{children}</Wrapper>
        </Providers>
      </body>
    </html>
  );
}

export default Layout;
