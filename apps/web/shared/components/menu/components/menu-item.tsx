'use client';
import { usePathname } from 'next/navigation';

import { Link } from '@components/link';

import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@ui/components/navigation/menu';

export const MenuItem = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  const pathname = usePathname();
  return (
    <NavigationMenuItem>
      <Link href={href} passHref legacyBehavior>
        <NavigationMenuLink href={href} active={pathname === href}>
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
