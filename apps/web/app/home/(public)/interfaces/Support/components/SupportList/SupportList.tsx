'use client';
import dynamic from 'next/dynamic';

import { Section } from '@ui/components/Layouts/Section';

const SupportListDesktop = dynamic(
  () => import('./SupportList.Desktop').then(mod => mod.SupportListDesktop),
  {
    ssr: false,
  },
);

const SupportListMobile = dynamic(
  () => import('./SupportList.Mobile').then(mod => mod.SupportListMobile),
  {
    ssr: false,
  },
);

export const SupportList = () => {
  return (
    <Section>
      <div className="hidden lg:block">
        <SupportListDesktop />
      </div>
      <div className="block lg:hidden">
        <SupportListMobile />
      </div>
    </Section>
  );
};
