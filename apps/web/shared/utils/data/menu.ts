import { PAGE_NAME } from '@/shared/helpers/page-names';

import { IMenuItem } from '@shared/types/menu.types';

export const MENU_ITEMS: IMenuItem[] = [
  {
    label: 'O Grupo Coobrastur',
    href: '#',
    items: [
      {
        label: 'O Grupo Coobrastur',
        href: '#',
        description: 'Lorem ipsum dolor sit amet, consectetur.',
      },
      {
        label: 'Como Funciona',
        href: '#',
        description: 'Lorem ipsum dolor sit amet, consectetur.',
      },
      {
        label: 'Dúvidas Frequentes',
        href: '#',
        description: 'Lorem ipsum dolor sit amet, consectetur.',
      },
    ],
  },
  {
    label: 'Planos',
    href: PAGE_NAME.planos,
  },
  {
    label: 'Agência de Viagens',
    href: PAGE_NAME.agencia,
  },
  {
    label: 'Hotéis',
    href: PAGE_NAME.hoteis,
  },
];
