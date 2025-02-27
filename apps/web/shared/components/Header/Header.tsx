import Image from 'next/image';

import {
  MENU_ITEMS,
  MenuDesktop,
  MenuMobile,
  MenuResponsive,
} from '@workspace/ui/components/Blocks/Navigation';
import { Icon } from '@workspace/ui/components/DataDisplay/Icon';
import { Button } from '@workspace/ui/components/DataEntry/Button';
import { Container } from '@workspace/ui/components/Layouts/Container';
import { ChevronDown } from '@workspace/ui/lib/icons';

export function Header() {
  return (
    <Container>
      <Container
        as="header"
        size="xl"
        className="flex items-center justify-between py-6 px-4 gap-8 border-b border-white/20 relative z-10 isLight"
      >
        <div className="w-[180px] lg:w-[245px]">
          <Image
            src="/images/shared/logos/logo-grupo-coobrastur-light.png"
            alt="Logo Grupo Coobrastur"
            width={245}
            height={40}
          />
        </div>
        <div className="hidden lg:block">
          <MenuDesktop menus={MENU_ITEMS} />
        </div>
        <div className="hidden md:block lg:hidden">
          <MenuResponsive menus={MENU_ITEMS} />
        </div>
        <div className="md:hidden">
          <MenuMobile menus={MENU_ITEMS} />
        </div>
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
