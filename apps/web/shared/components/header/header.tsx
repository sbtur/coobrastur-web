import Image from 'next/image';

import { Link } from '@components/link';
import { Menu } from '@components/menu';

import { MENU_ITEMS } from '@/shared/helpers/data/menu';
import { PAGE_NAME } from '@/shared/helpers/page-names';

import { DropdownAccess } from './components/dropdown-access';

import logoDark from '@images/shared/logos/logo-grupo-coobrastur-dark.png';
import logoLight from '@images/shared/logos/logo-grupo-coobrastur-light.png';
import { Separator } from '@ui/components/data-display/separator';
import { Button } from '@ui/components/data-entry/button';
import { Container } from '@ui/components/layouts/container';

type HeaderProps = {
  isLight?: boolean;
};

export function Header({ isLight = false }: HeaderProps) {
  return (
    <header>
      <Container
        className={`w-11/12 relative z-10 ${isLight ? 'isLight' : ''}`}
      >
        <div className="flex items-center justify-between gap-8 pt-6 pb-3 px-2 lg:py-6 lg:px-4 ">
          <div className="w-[180px] lg:w-[245px]">
            <Link href={PAGE_NAME.home}>
              <Image
                src={isLight ? logoLight : logoDark}
                alt="Logo Grupo Coobrastur"
                width={245}
                height={36}
                className="w-[180px] h-auto lg:w-[245px] lg:h-[36px]"
              />
            </Link>
          </div>
          <Menu menuItems={MENU_ITEMS} />
          <div className="hidden lg:flex flex-nowrap gap-4">
            <DropdownAccess />
            <Button
              variant={isLight ? 'outline-white' : 'outline'}
              className="hidden xl:flex"
              asChild
            >
              <Link href={PAGE_NAME.planos}>Planos</Link>
            </Button>
          </div>
        </div>
        <Separator />
      </Container>
    </header>
  );
}
