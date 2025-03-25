'use client';

import { usePathname } from 'next/navigation';

import { Link } from '@components/Link';

import { MenuLink as MenuLinkUI } from '@ui/components/navigation/menu';

export const MenuLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  return (
    <Link href={href} passHref legacyBehavior>
      <MenuLinkUI
        href={href}
        className={pathname === href ? 'font-semibold' : ''}
      >
        {label}
      </MenuLinkUI>
    </Link>
  );
};
