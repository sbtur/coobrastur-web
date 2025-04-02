import Image from 'next/image';

import { Link } from '@components/link';
import { Menu } from '@components/menu';

import { MENU_ITEMS } from '@/shared/helpers/menu';

import logoDark from '@images/shared/logos/logo-grupo-coobrastur-dark.png';
import logoLight from '@images/shared/logos/logo-grupo-coobrastur-light.png';
import { Icon } from '@ui/components/data-display/icon';
import { Separator } from '@ui/components/data-display/separator';
import { Button } from '@ui/components/data-entry/button';
import { Container } from '@ui/components/layouts/container';
import { ChevronDown } from '@ui/lib/icons';

type HeaderProps = {
  isLight?: boolean;
};

export function Header({ isLight = false }: HeaderProps) {
  return (
    <header>
      <Container className={`relative z-10 ${isLight ? 'isLight' : ''}`}>
        <div className="flex items-center justify-between gap-8 py-6 px-4 ">
          <div className="w-[180px] lg:w-[245px]">
            <Link href="/">
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
          <div className="hidden md:flex flex-nowrap gap-4">
            <Button size="sm">
              Acessos <Icon icon={ChevronDown} variant="white" />
            </Button>
            <Button variant={isLight ? 'outline-white' : 'outline'} size="sm">
              Planos
            </Button>
          </div>
        </div>
        <Separator className="w-[85%] md:w-full" />
      </Container>
    </header>
  );
}
