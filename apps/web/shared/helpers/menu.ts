import { IMenuItem } from '@shared/types/menu.types';

export const MENU_ITEMS: IMenuItem[] = [
  {
    label: 'O Clube',
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
    href: '/plans',
  },
  {
    label: 'Agência de Viagens',
    href: '/travel-agency',
  },
  {
    label: 'Hotéis',
    href: '/search-place',
  },
];
