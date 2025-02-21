import ImageNext from 'next/image';

import {
  Button,
  Container,
  Icon,
  Image,
  Menu,
  Wrapper,
} from '@workspace/ui/components';
import { ChevronDown } from '@workspace/ui/lib/icons';

import type { Meta, StoryObj } from '@storybook/react';

const HeaderStory = () => <div />;

const meta = {
  title: 'Blocks/Header',
  component: HeaderStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Wrapper>
      <Container className="flex items-center justify-between py-6 px-4 border-b border-white/20 bg-background">
        <div className="logo">
          <Image
            src="/images/logo-grupro-coobrastur-dark.png"
            alt="Logo Grupo Coobrastur"
            width={245}
            height={40}
            renderComponent={({ ...props }) => <ImageNext {...props} />}
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
            Acessos <Icon icon={ChevronDown} variant="white" />
          </Button>
          <Button variant="outline" size="lg">
            Planos
          </Button>
        </div>
      </Container>
    </Wrapper>
  ),
};

export const Light: Story = {
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
  render: () => (
    <Wrapper>
      <Container
        as="header"
        size="full"
        className="flex items-center justify-between py-6 px-4 border-b border-white/20 isLight"
      >
        <div className="logo">
          <Image
            src="/images/logo-grupro-coobrastur-light.png"
            alt="Logo Grupo Coobrastur"
            width={245}
            height={40}
            renderComponent={({ ...props }) => <ImageNext {...props} />}
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
            Acessos <Icon icon={ChevronDown} variant="white" />
          </Button>
          <Button variant="outline-white" size="lg">
            Planos
          </Button>
        </div>
      </Container>
    </Wrapper>
  ),
};
