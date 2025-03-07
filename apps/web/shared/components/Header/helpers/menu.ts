import { MenuItem } from '@coobrastur/ui/components/Blocks/Navigation';

export const MENU_ITEMS: MenuItem[] = [
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
    href: '#',
  },
  {
    label: 'Agência de Viagens',
    href: '#',
  },
  {
    label: 'Destinos',
    href: '#',
  },
  {
    label: 'Hotéis',
    href: '#',
  },
];
