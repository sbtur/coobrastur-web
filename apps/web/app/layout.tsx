import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { Wrapper } from '@workspace/ui/components';

import { Providers } from '@providers';

import '@workspace/ui/globals.css';

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
