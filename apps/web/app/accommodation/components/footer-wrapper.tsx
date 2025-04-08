'use client';

import { Footer } from '@/shared/components/footer';
import { LayoutSpacer } from '@/shared/components/layout-spacer';
import { ResponsiveSmallerThan } from '@/shared/components/responsive';

export const FooterWrapper = () => {
  return (
    <div data-layout-space>
      <ResponsiveSmallerThan breakpoint="lg">
        <LayoutSpacer />
      </ResponsiveSmallerThan>
      <Footer />
    </div>
  );
};
