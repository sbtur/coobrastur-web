export const PLANS_CATEGORIES_BASE_DEFINITIONS = {
  silver: {
    foregroundColor: 'text-[#6B7780]',
    backgroundColor: 'bg-[#F2F4F5]',
    name: 'Silver',
    id: 31,
    value: '31',
  },
  gold: {
    foregroundColor: 'text-[#D4A72C]',
    backgroundColor: 'bg-[#FFFACD]',
    name: 'Gold',
    id: 34,
    value: '34',
  },
  diamond: {
    foregroundColor: 'text-[#2E6299]',
    backgroundColor: 'bg-[#E2F2FF]',
    name: 'Diamante',
    id: 33,
    value: '33',
  },
};

export type PlanCategoryBaseDefinition =
  typeof PLANS_CATEGORIES_BASE_DEFINITIONS;
