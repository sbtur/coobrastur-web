import { ReactNode } from 'react';

import { Footer } from '@/shared/components/footer';

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default HomeLayout;
