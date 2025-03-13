'use client';
import dynamic from 'next/dynamic';

import { Section } from '@ui/components/Layouts/Section';

const AdvantagesListDesktop = dynamic(
  () =>
    import('./AdvantagesList.Desktop').then(mod => mod.AdvantagesListDesktop),
  {
    ssr: false,
  },
);

const AdvantagesListMobile = dynamic(
  () => import('./AdvantagesList.Mobile').then(mod => mod.AdvantagesListMobile),
  {
    ssr: false,
  },
);

export const AdvantagesList = () => {
  return (
    <Section>
      <div className="hidden lg:block">
        <AdvantagesListDesktop />
      </div>
      <div className="block lg:hidden">
        <AdvantagesListMobile />
      </div>
    </Section>
  );
};
