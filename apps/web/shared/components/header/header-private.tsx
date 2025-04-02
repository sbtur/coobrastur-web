import { Text } from '@coobrastur/ui/components/data-display/text';
import { UserRoundCheck } from '@coobrastur/ui/lib/icons';

import { Image } from '@components/image';
import { Link } from '@components/link';
import { Menu } from '@components/menu';

import { DropdownPlans } from './components/dropdown-plans';

import logoDark from '@images/shared/logos/logo-grupo-coobrastur-dark.png';
import { MENU_PRIVATE_ITEMS } from '@shared/helpers/menu-private';
import { Icon } from '@ui/components/data-display/icon';
import { Separator } from '@ui/components/data-display/separator';
import { Container } from '@ui/components/layouts/container';

export const HeaderPrivate = () => {
  return (
    <header>
      <Container className="relative z-10">
        <div className="flex items-center gap-7">
          <div className="h-[50px] flex items-center gap-3">
            <Image
              src="/images/shared/logos/coob-2.png"
              alt="Logo Coobrastur"
              width={78}
              height={22}
            />
            <Separator
              orientation="vertical"
              className="bg-neutral-200 h-full m-0"
            />
            <Image
              src="/images/shared/logos/meridien-2.png"
              alt="Logo Meridien"
              width={78}
              height={22}
            />
            <Separator
              orientation="vertical"
              className="bg-neutral-200 h-full m-0"
            />
            <Image
              src="/images/shared/logos/banstur-2.png"
              alt="Logo Banstur"
              width={78}
              height={22}
            />
            <Separator
              orientation="vertical"
              className="bg-neutral-200 h-full m-0"
            />
          </div>
          <Text className="text-xs text-neutral-400 uppercase">
            Somos um grupo empresarial de turismo completo, especializado em
            <span className="font-bold text-primary">
              {' '}
              assinatura de hotéis.
            </span>
          </Text>
        </div>
        <Separator className="w-[85%] md:w-full mx-auto [.isLight_&]:bg-white/20" />
        <div className="flex items-center justify-between gap-8 py-6 px-4 ">
          <div className="w-[180px] lg:w-[245px]">
            <Link href="/">
              <Image
                src={logoDark}
                alt="Logo Grupo Coobrastur"
                width={245}
                height={36}
                className="w-[180px] h-auto lg:w-[245px] lg:h-[36px]"
              />
            </Link>
          </div>
          <Menu menuItems={MENU_PRIVATE_ITEMS} />
          <div className="flex gap-8 items-center">
            <DropdownPlans />
            <div className="flex gap-2 items-center">
              <span className="text-xs text-gray-400 uppercase underline">
                Menu
              </span>
              <div className="flex bg-gray-100 rounded-full justify-center items-center w-[48px] h-[48px]">
                <Icon icon={UserRoundCheck} variant="neutral" />
              </div>
            </div>
          </div>
        </div>
        <Separator className="w-[85%] md:w-full mx-auto" />
      </Container>
    </header>
  );
};
