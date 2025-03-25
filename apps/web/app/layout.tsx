import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { Footer } from '@components/footer';
import { Providers } from '@providers';

import '@coobrastur/ui/globals.css';

import { Wrapper } from '@ui/components/layouts/wrapper';

export const metadata: Metadata = {
  title: 'Coobrastur',
  description: 'Coobrastur',
};

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>
          <Wrapper>
            {children}
            <Footer />
          </Wrapper>
        </Providers>
      </body>
    </html>
  );
}

export default Layout;
