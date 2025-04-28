import { Filter } from '../types/filter.types';

import Beach from '@images/icons/filters/beach.svg';
import City from '@images/icons/filters/city.svg';
import Farm from '@images/icons/filters/farm.svg';
import Historic from '@images/icons/filters/historic.svg';
import Lake from '@images/icons/filters/lake.svg';
import Mountain from '@images/icons/filters/mountain.svg';

export const FILTERS: Filter[] = [
  {
    label: 'Litoral',
    value: 'beach',
    icon: Beach,
  },
  {
    label: 'Serras',
    value: 'mountain',
    icon: Mountain,
  },
  {
    label: 'Urbano',
    value: 'urban',
    icon: City,
  },
  {
    label: 'Fazenda',
    value: 'farm',
    icon: Farm,
  },
  {
    label: 'Fontes Termais Minerais',
    value: 'mineral-springs',
    icon: Lake,
  },
  {
    label: 'Centro Histórico',
    value: 'historical-center',
    icon: Historic,
  },
];
