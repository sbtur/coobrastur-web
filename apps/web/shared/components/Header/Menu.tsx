'use client';
import dynamic from 'next/dynamic';

import { MENU_ITEMS } from './helpers/menu';

const MenuLoading = () => (
  <div className="h-6 animate-pulse bg-gray-200/10 rounded" />
);

const MenuDesktop = dynamic(
  () =>
    import('@coobrastur/ui/components/Blocks/Navigation/MenuDesktop').then(
      mod => mod.MenuDesktop,
    ),
  {
    ssr: false,
    loading: () => <MenuLoading />,
  },
);

const MenuMobile = dynamic(
  () =>
    import('@coobrastur/ui/components/Blocks/Navigation/MenuMobile').then(
      mod => mod.MenuMobile,
    ),
  {
    ssr: false,
    loading: () => <MenuLoading />,
  },
);

const MenuResponsive = dynamic(
  () =>
    import('@coobrastur/ui/components/Blocks/Navigation/MenuResponsive').then(
      mod => mod.MenuResponsive,
    ),
  {
    ssr: false,
    loading: () => <MenuLoading />,
  },
);

export const Menu = () => (
  <>
    <div className="hidden lg:block">
      <MenuDesktop menus={MENU_ITEMS} />
    </div>
    <div className="hidden md:block lg:hidden">
      <MenuResponsive menus={MENU_ITEMS} />
    </div>
    <div className="md:hidden">
      <MenuMobile menus={MENU_ITEMS} />
    </div>
  </>
);
