import { ReactNode } from 'react';

import { FooterWrapper } from './components/footer-wrapper';

function AccommodationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#E0ECF3]">
      {children}
      <FooterWrapper />
    </div>
  );
}

export default AccommodationLayout;
