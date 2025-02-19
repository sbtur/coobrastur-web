import Image from 'next/image';

import { Button, Container, Icon, Menu } from '@workspace/ui/components';
import { MdKeyboardArrowDown } from '@workspace/ui/lib/icons';

export function Header(): JSX.Element {
  return (
    <Container
      as="header"
      className="py-6 px-4 border-b border-white/20 isLight"
    >
      <div className="logo">
        <Image
          src="/images/logo/logo-grupo-coobrastur-light.png"
          alt="Logo Grupo Coobrastur"
          width={245}
          height={40}
        />
      </div>
      <Menu.Root>
        <Menu.List>
          <Menu.Item>
            <Menu.Trigger>O Clube</Menu.Trigger>
            <Menu.Content>
              <Menu.Dropdown>
                <Menu.DropdownItem>
                  <Menu.DropdownLink href="#">
                    <div className="text-primary leading-none">Sobre Nós</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                      Conheça a empresa
                    </p>
                  </Menu.DropdownLink>
                </Menu.DropdownItem>
                <Menu.DropdownItem>
                  <Menu.DropdownLink href="#">
                    <div className="text-primary leading-none">Planos</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                      Conheça os planos
                    </p>
                  </Menu.DropdownLink>
                </Menu.DropdownItem>
              </Menu.Dropdown>
            </Menu.Content>
          </Menu.Item>
          <Menu.Item>
            <Menu.Link href="#">Planos</Menu.Link>
          </Menu.Item>
          <Menu.Item>
            <Menu.Link href="#">Agência de Viagens</Menu.Link>
          </Menu.Item>
          <Menu.Item>
            <Menu.Link href="#">Destinos</Menu.Link>
          </Menu.Item>
          <Menu.Item>
            <Menu.Link href="#">Hotéis</Menu.Link>
          </Menu.Item>
        </Menu.List>
      </Menu.Root>
      <div className="space-x-4">
        <Button size="lg">
          Acessos <Icon icon={MdKeyboardArrowDown} color="white" />
        </Button>
        <Button variant="outline-white" size="lg">
          Planos
        </Button>
      </div>
    </Container>
  );
}
