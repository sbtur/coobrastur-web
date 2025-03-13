import { Filter } from '../types/filter.types';

import {
  Briefcase,
  CirclePercent,
  Gem,
  House,
  Mountain,
  Sun,
  Waves,
  WavesLadder,
} from '@ui/lib/icons';

export const FILTERS: Filter[] = [
  {
    label: 'Econômico',
    value: 'economic',
    icon: CirclePercent,
  },
  {
    label: 'Executivo',
    value: 'executive',
    icon: Briefcase,
  },
  {
    label: 'Luxo',
    value: 'luxury',
    icon: Gem,
  },
  {
    label: 'Resort',
    value: 'resort',
    icon: WavesLadder,
  },
  {
    label: 'Praia',
    value: 'beach',
    icon: Sun,
  },
  {
    label: 'Serra',
    value: 'mountains',
    icon: Mountain,
  },
  {
    label: 'Pousada',
    value: 'pousada',
    icon: House,
  },
  {
    label: 'Lago',
    value: 'lake',
    icon: CirclePercent,
  },
  {
    label: 'Piscina',
    value: 'pool',
    icon: Waves,
  },
  {
    label: 'Cachoeira',
    value: 'river',
    icon: Waves,
  },
];
