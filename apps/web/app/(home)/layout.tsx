import { ReactNode } from 'react';

import { Footer } from '@/shared/components/footer';
import { UserMobileNavigation } from '@/shared/components/user-mobile-navigation';

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
      <UserMobileNavigation />
    </>
  );
}

export default HomeLayout;
