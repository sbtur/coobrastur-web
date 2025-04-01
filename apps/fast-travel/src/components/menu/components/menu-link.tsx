import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MenuLink } from '@ui/components/navigation/menu';

export const MenuLinkComposed = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => {
  const pathname = usePathname();
  return (
    <Link href={href} passHref legacyBehavior>
      <MenuLink
        href={href}
        className={pathname === href ? 'font-semibold' : ''}
      >
        {label}
      </MenuLink>
    </Link>
  );
};
