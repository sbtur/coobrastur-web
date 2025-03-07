import Image from 'next/image';

import { Icon } from '@coobrastur/ui/components/DataDisplay/Icon';
import { Button } from '@coobrastur/ui/components/DataEntry/Button';
import { Container } from '@coobrastur/ui/components/Layouts/Container';
import { ChevronDown } from '@coobrastur/ui/lib/icons';

import { Menu } from './Menu';

export function Header() {
  return (
    <Container size="xl">
      <Container
        as="header"
        className="flex items-center justify-between py-6 px-4 gap-8 border-b border-white/20 relative z-10 isLight"
      >
        <div className="w-[180px] lg:w-[245px]">
          <Image
            src="/images/shared/logos/logo-grupo-coobrastur-light.png"
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
          <Button variant="outline-white" size="sm">
            Planos
          </Button>
        </div>
      </Container>
    </Container>
  );
}
