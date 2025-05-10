'use client';
import { signOut } from 'next-auth/react';

import { Calendar, LogInIcon } from 'lucide-react';

import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';

import { CarrouselDetails } from '@/app/(home)/(private)/containers/carrousel-details';

import { Icon } from '@ui/components/data-display/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@ui/components/data-display/sheet';
import { Button } from '@ui/components/data-entry/button';
import { NavigationMenu } from '@ui/components/navigation/menu';
import { Heart, MenuIcon, Plus, User } from '@ui/lib/icons';

export const MenuMobilePrivate = () => {
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
      <SheetContent className="bg-gray-100 rounded-l-lg h-full overflow-y-auto">
        <NavigationMenu>
          <div className="flex flex-col gap-2">
            <Title>Olá, Igor</Title>
            <Text size="sm">Seja bem-vindo(a)</Text>

            <CarrouselDetails plans={plans} displayLastReservation={false} />
            <div className="flex w-full mt-4">
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant="outline-secondary"
                  className="border-2 shadow-none border-width-2 border-gray-200 font-normal text-neutral-500 text-base flex flex-row justify-start gap-2 px-4 py-4 w-full"
                >
                  <User size={16} className="text-primary-300 w-6 h-6" />
                  <span>Minha Conta</span>
                </Button>

                <Button
                  variant="outline-secondary"
                  className="border-2 shadow-none border-width-2 border-gray-200 font-normal text-neutral-500 text-base flex flex-row justify-start gap-2 px-4 py-4 w-full"
                >
                  <Calendar size={16} className="text-primary-300" />
                  <span className="md:block">Minhas Reservas</span>
                </Button>

                <Button
                  variant="outline-secondary"
                  className="border-2 shadow-none border-width-2 border-gray-200 font-normal text-neutral-500 text-base flex flex-row justify-start gap-2 px-4 py-4 w-full"
                >
                  <Heart size={16} className="text-primary-300" />
                  <span className="md:block">Meus Favoritos</span>
                </Button>

                <Button
                  variant="outline-secondary"
                  className="border-2 shadow-none border-width-2 border-gray-200 font-normal text-neutral-500 text-base flex flex-row justify-start gap-2 px-4 py-4 w-full"
                >
                  <Plus size={16} className="text-primary-300" />
                  <span className="md:block">Indique Mais +</span>
                </Button>

                <div className="flex flex-col gap-2 w-full mt-4">
                  <button
                    onClick={() => signOut()}
                    className="flex items-center justify-end gap-1 text-neutral-500 text-sm hover:text-primary-300 transition-colors"
                  >
                    Sair da conta
                    <Icon icon={LogInIcon} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
};
