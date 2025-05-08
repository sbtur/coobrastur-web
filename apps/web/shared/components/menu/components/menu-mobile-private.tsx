'use client';

import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';

import { Link } from '@components/link';

import { CarrouselDetails } from '@/app/(home)/(private)/containers/carrousel-details';
import { IMenuItem } from '@/shared/types/menu.types';

import { Icon } from '@ui/components/data-display/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@ui/components/data-display/sheet';
import { NavigationMenu } from '@ui/components/navigation/menu';
import { MenuIcon } from '@ui/lib/icons';

export const MenuMobilePrivate = ({ menus }: { menus: IMenuItem[] }) => {
  const plans = [
    {
      id: '1897854567',
      name: 'Silver Master',
      type: 'silver',
      badges: [
        { type: 'warning' as const, label: 'Gold' },
        { type: 'neutral' as const, label: 'Master' },
      ],
      days: 7,
      validity: {
        start: '01/09/2023',
        end: '31/08/2026',
      },
      installment: {
        year: 1,
        number: 6,
      },
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="grid lg:hidden text-primary-200">
          <Icon icon={MenuIcon} className="h-8 w-8 text-primary-200" />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-gray-100 rounded-l-lg">
        <NavigationMenu>
          <div className="flex flex-col gap-2">
            <Title>Olá, Igor</Title>
            <Text size="sm">Seja bem-vindo(a)</Text>

            <CarrouselDetails plans={plans} displayLastReservation={false} />
          </div>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
};
