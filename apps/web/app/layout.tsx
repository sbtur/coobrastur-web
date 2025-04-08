import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { mangueira, sourceSansPro } from 'assets/fonts';

import { Footer } from '@components/footer';
import { Image } from '@components/image';
import { UserMobileNavigation } from '@components/user-mobile-navigation';
import { Providers } from '@providers';

import '@coobrastur/ui/globals.css';

export const metadata: Metadata = {
  title: 'Coobrastur',
  description: 'Coobrastur',
};

function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${mangueira.variable} ${sourceSansPro.variable}`}
    >
      <body>
        <Providers>
          {children}
          {/* <Footer /> */}

          {/* <UserMobileNavigation /> */}

          <Image
            src="/images/shared/chat-clara.png"
            alt="Converse com a Clara"
            width={264}
            height={74}
            className="hidden lg:block fixed bottom-5 right-5 z-10"
          />
        </Providers>
      </body>
    </html>
  );
}

export default Layout;
