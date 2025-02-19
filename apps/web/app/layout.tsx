import type { Metadata } from 'next';

import '@workspace/ui/globals.css';

import { Providers } from '@providers';

export const metadata: Metadata = {
  title: 'Coobrastur',
  description: 'Coobrastur',
};

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default Layout;
