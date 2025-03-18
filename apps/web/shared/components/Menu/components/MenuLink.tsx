import { usePathname } from 'next/navigation';

import { Link } from '@components/Link';

import { Menu } from '@ui/components/Navigation/Menu';

export const MenuLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  return (
    <Link href={href} passHref legacyBehavior>
      <Menu.Link
        href={href}
        className={pathname === href ? 'font-semibold' : ''}
      >
        {label}
      </Menu.Link>
    </Link>
  );
};
