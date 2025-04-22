import { ReactNode } from 'react';
import { Metadata } from 'next';

import { mangueira, sourceSansPro } from 'assets/fonts';

import { Image } from '@components/image';
import { Providers } from '@providers';

import '@coobrastur/ui/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Grupo Coobrastur',
    default: 'Grupo Coobrastur',
  },
  description: 'Viaje mais todos os anos com a nossa Assinatura de hotéis',
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
