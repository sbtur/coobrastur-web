import { ReactNode } from 'react';

import { HeaderPublic } from '@/shared/components/header';

import { FooterWrapper } from './components/footer-wrapper';

function AccommodationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#E0ECF3]">
      <HeaderPublic />
      {children}
      <FooterWrapper />
    </div>
  );
}

export default AccommodationLayout;
