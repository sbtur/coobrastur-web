import { Calendar, Heart, Plus, User } from 'lucide-react';

import { Button } from '@coobrastur/ui/components/data-entry/button';

import { Container } from '@ui/components/layouts/container';

export function ButtonsMenu() {
  return (
    <Container className="w-full py-4 px-10" as="section">
      <div className="flex justify-center items-center w-full">
        <div className="flex gap-4 flex-wrap">
          <Button
            variant="outline-secondary"
            className="border-2 border-neutral-200 shadow-none font-normal text-neutral-500 md:text-base text-xs flex flex-col md:flex-row items-center md:gap-2 gap-0 px-2 py-1 md:px-4 md:py-2"
          >
            <User
              size={16}
              className="text-primary-300 md:w-6 md:h-6 w-4 h-4"
            />
            <span className="hidden md:block">Minha Conta</span>
            <span className="block md:hidden">Dados</span>
          </Button>

          <Button
            variant="outline-secondary"
            className="border-2 border-neutral-200 shadow-none font-normal text-neutral-500 md:text-base text-xs flex flex-col md:flex-row items-center md:gap-2 gap-0 px-2 py-1 md:px-4 md:py-2"
          >
            <Calendar size={16} className="text-primary-300" />
            <span className="hidden md:block">Minhas Reservas</span>
            <span className="block md:hidden">Reservas</span>
          </Button>

          <Button
            variant="outline-secondary"
            className="border-2 border-neutral-200 shadow-none font-normal text-neutral-500 md:text-base text-xs flex flex-col md:flex-row items-center md:gap-2 gap-0 px-2 py-1 md:px-4 md:py-2"
          >
            <Heart size={16} className="text-primary-300" />
            <span className="hidden md:block">Meus Favoritos</span>
            <span className="block md:hidden">Favoritos</span>
          </Button>

          <Button
            variant="outline-secondary"
            className="border-2 border-neutral-200 shadow-none font-normal text-neutral-500 md:text-base text-xs flex flex-col md:flex-row items-center md:gap-2 gap-0 px-2 py-1 md:px-4 md:py-2"
          >
            <Plus size={16} className="text-primary-300" />
            <span className="hidden md:block">Indique Mais +</span>
            <span className="block md:hidden">Indique</span>
          </Button>
        </div>
      </div>
    </Container>
  );
}
