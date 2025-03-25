import { ReactNode } from 'react';

import { mangueira, sourceSans3 } from 'assets/fonts';

export function StorybookWrapper({ children }: { children: ReactNode }) {
  return (
    <div className={`${mangueira.variable} ${sourceSans3.variable}`}>
      {children}
    </div>
  );
}
