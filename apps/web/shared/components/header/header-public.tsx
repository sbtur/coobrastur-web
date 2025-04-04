import { Menu } from '@components/menu';
import { MENU_ITEMS } from '@utils/data/menu';

import { DropdownAccess } from './components/dropdown-access';
import { Logo } from './components/logo';
import { SignupButton } from './components/signup-button';
import { Header } from './header';

import { Separator } from '@ui/components/data-display/separator';
import { Container } from '@ui/components/layouts/container';

type HeaderProps = {
  light?: boolean;
};

export function HeaderPublic({ light = false }: HeaderProps) {
  return (
    <Header light={light}>
      <Container className="relative z-10">
        <div className="flex items-center justify-between gap-8 pt-6 pb-3 px-2 lg:py-5 lg:px-4 ">
          <Logo light={light} />
          <Menu menuItems={MENU_ITEMS} />
          <div className="hidden lg:flex flex-nowrap gap-4">
            <DropdownAccess />
            <SignupButton light={light} />
          </div>
        </div>
      </Container>
      <Separator className="w-[85%] md:w-full mx-auto" />
    </Header>
  );
}
