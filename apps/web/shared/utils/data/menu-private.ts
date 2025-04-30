import { PAGE_NAME } from '@/shared/helpers/page-names';

import { IMenuItem } from '@shared/types/menu.types';

export const MENU_PRIVATE_ITEMS: IMenuItem[] = [
  {
    label: 'Hoteis',
    href: PAGE_NAME.hoteis,
  },
  {
    label: 'Ajuda & Suporte',
    href: '/plans',
  },
  {
    label: 'Indique +',
    href: PAGE_NAME.agencia,
  },
];
