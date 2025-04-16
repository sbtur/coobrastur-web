import { ReactNode, Suspense } from 'react';

import { Footer } from '@/shared/components/footer';
import { HeaderPublic } from '@/shared/components/header';
import { UserMobileNavigation } from '@/shared/components/user-mobile-navigation';

import SearchPlaceLoading from './loading';

export default function SearchPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <HeaderPublic />
      <Suspense fallback={<SearchPlaceLoading />}>{children}</Suspense>
      <Footer />
      <UserMobileNavigation />
    </div>
  );
}
