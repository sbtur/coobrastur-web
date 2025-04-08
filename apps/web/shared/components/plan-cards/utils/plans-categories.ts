import { PLANS_CATEGORIES_BASE_DEFINITIONS } from '@/shared/utils/plans-categories-base-definitions';

export const PLANS_CATEGORIES = [
  {
    ...PLANS_CATEGORIES_BASE_DEFINITIONS.silver,
    description: 'Selecione abaixo o período do ano em que deseja viajar:',
  },
  {
    ...PLANS_CATEGORIES_BASE_DEFINITIONS.gold,
    description: 'Selecione abaixo o período do ano em que deseja viajar:',
  },
  {
    ...PLANS_CATEGORIES_BASE_DEFINITIONS.diamond,
    description:
      'Destinos exclusivos para você visitar em qualquer período do ano.',
  },
];

export const DAILIES_OPTIONS = [
  {
    id: 7,
    value: '7',
    name: '7 diárias',
  },
  {
    id: 14,
    value: '14',
    name: '14 diárias',
  },
  {
    id: 21,
    value: '21',
    name: '21 diárias',
  },
  {
    id: 28,
    value: '28',
    name: '28 diárias',
  },
];

export const PLANS_OPTIONS = [
  {
    id: 21,
    value: '21',
    name: 'Plano VIP',
    description:
      'Plano ideal para viagens em <strong>baixa temporada</strong>.',
  },
  {
    id: 22,
    value: '22',
    name: 'Plano Master',
    description:
      'Plano flexível para viajar <strong>durante o ano todo</strong>.',
  },
];
