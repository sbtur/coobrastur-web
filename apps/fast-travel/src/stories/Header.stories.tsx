import Image from 'next/image';

import type { Meta, StoryObj } from '@storybook/react';
import {
  MENU_ITEMS,
  MenuDesktop,
  MenuMobile,
  MenuResponsive,
} from '@ui/components/Blocks/Navigation';
import { Icon } from '@ui/components/DataDisplay/Icon';
import { Button } from '@ui/components/DataEntry/Button';
import { Container } from '@ui/components/Layouts/Container';
import { Wrapper } from '@ui/components/Layouts/Wrapper';
import { ChevronDown } from '@ui/lib/icons';

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
    <Container className="w-full flex items-center justify-between py-6 px-4 gap-8 border-b border-neutral-200 relative z-10">
      <div className="w-[180px] lg:w-[245px]">
        <Image
          src="/images/logo-grupo-coobrastur-dark.png"
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
      <div className="hidden md:flex flex-nowrap gap-4">
        <Button size="sm">
          Acessos <Icon icon={ChevronDown} variant="white" />
        </Button>
        <Button variant="outline" size="sm">
          Planos
        </Button>
      </div>
    </Container>
  ),
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'xsmall-375',
    },
  },
  render: () => (
    <Container className="w-full flex items-center justify-between py-6 px-4 gap-8 border-b border-neutral-200 relative z-10">
      <div className="w-[180px] lg:w-[245px]">
        <Image
          src="/images/logo-grupo-coobrastur-dark.png"
          alt="Logo Grupo Coobrastur"
          width={245}
          height={40}
        />
      </div>
      <MenuMobile menus={MENU_ITEMS} />
      <div className="hidden md:flex flex-nowrap gap-4">
        <Button size="sm">
          Acessos <Icon icon={ChevronDown} variant="white" />
        </Button>
        <Button variant="outline" size="sm">
          Planos
        </Button>
      </div>
    </Container>
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
        className="w-full flex items-center justify-between py-6 px-4 gap-8 border-b border-white/20 relative z-10 isLight"
      >
        <div className="w-[180px] lg:w-[245px]">
          <Image
            src="/images/logo-grupo-coobrastur-light.png"
            alt="Logo Grupo Coobrastur"
            width={245}
            height={40}
          />
        </div>
        <MenuDesktop menus={MENU_ITEMS} />
        <div className="hidden md:flex flex-nowrap gap-4">
          <Button size="sm">
            Acessos <Icon icon={ChevronDown} variant="white" />
          </Button>
          <Button variant="outline-white" size="sm">
            Planos
          </Button>
        </div>
      </Container>
    </Wrapper>
  ),
};
