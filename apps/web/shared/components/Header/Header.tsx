import Image from 'next/image';

import { Menu } from './Menu';

import logoDark from '@images/shared/logos/logo-grupo-coobrastur-dark.png';
import logoLight from '@images/shared/logos/logo-grupo-coobrastur-light.png';
import { Icon } from '@ui/components/DataDisplay/Icon';
import { Button } from '@ui/components/DataEntry/Button';
import { Container } from '@ui/components/Layouts/Container';
import { ChevronDown } from '@ui/lib/icons';

type HeaderProps = {
  isLight?: boolean;
};

export function Header({ isLight = false }: HeaderProps) {
  return (
    <Container size="xl">
      <Container
        as="header"
        className={`flex items-center justify-between py-6 px-4 gap-8 border-b border-white/20 relative z-10 ${isLight ? 'isLight' : ''}`}
      >
        <div className="w-[180px] lg:w-[245px]">
          <Image
            src={isLight ? logoLight : logoDark}
            alt="Logo Grupo Coobrastur"
            width={245}
            height={36}
            className="w-[180px] h-auto lg:w-[245px] lg:h-[36px]"
          />
        </div>
        <Menu />
        <div className="hidden md:flex flex-nowrap gap-4">
          <Button size="sm">
            Acessos <Icon icon={ChevronDown} variant="white" />
          </Button>
          <Button variant={isLight ? 'outline-white' : 'outline'} size="sm">
            Planos
          </Button>
        </div>
      </Container>
    </Container>
  );
}
