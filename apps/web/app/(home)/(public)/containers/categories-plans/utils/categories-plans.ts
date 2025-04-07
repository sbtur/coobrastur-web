import { PLANS_CATEGORIES_BASE_DEFINITIONS } from '@/shared/utils/plans-categories-base-definitions';

export const CATEGORIES_PLANS = [
  {
    ...PLANS_CATEGORIES_BASE_DEFINITIONS.silver,
    description:
      'Aproveite hotéis Executivos para uma viagem incrível e com muito economia.',
  },
  {
    ...PLANS_CATEGORIES_BASE_DEFINITIONS.gold,
    description:
      'Hospedagens de categoria Superior para experiências de viagem ainda mais confortável.',
  },
  {
    ...PLANS_CATEGORIES_BASE_DEFINITIONS.diamond,
    description:
      'Hotéis e resorts de luxo no Brasil e no exterior para experiências inesquecíveis.',
  },
];
