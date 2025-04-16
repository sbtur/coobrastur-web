import { ReactNode } from 'react';

import { Separator } from '@coobrastur/ui/components/data-display/separator';

import { Footer } from '@/shared/components/footer';
import { HeaderPublic } from '@/shared/components/header';
import { UserMobileNavigation } from '@/shared/components/user-mobile-navigation';

import { Search } from './containers/search';
import { SearchFilters } from './containers/search-filters';
import { SearchProvider } from './providers/search-provider';

export default function SearchPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SearchProvider>
      <div className="flex min-h-dvh flex-col">
        <HeaderPublic />
        <main className="flex-1">
          <Search />
          <Separator />
          <SearchFilters />
          {children}
        </main>
        <Footer />
        <UserMobileNavigation />
      </div>
    </SearchProvider>
  );
}
