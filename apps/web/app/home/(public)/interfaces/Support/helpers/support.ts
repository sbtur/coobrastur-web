import { Support } from '../types/support.types';

import { LucideHeadset, LucideLuggage } from '@ui/lib/icons';

export const SUPPORT: Support[] = [
  {
    icon: '/images/icons/clara.png',
    title: 'Dúvidas? Fale com a Clara',
    description:
      'Conte com o atendimento exclusivo da Clara, nossa especialista virtual, para uma experiência personalizada e eficiente.',
    href: 'https://wa.me/5511999999999',
    target: '_blank',
  },
  {
    icon: LucideHeadset,
    title: 'Atendimento Exclusivo',
    description:
      'Nossos agentes são treinados e estão prontos para ouvir suas necessidades, oferecendo soluções rápidas e eficazes.',
    href: 'https://wa.me/5511999999999',
  },
  {
    icon: LucideLuggage,
    title: 'Agência de Viagens',
    description:
      'Oferecemos uma agência de viagens com soluções personalizadas para tornar sua experiência ainda mais incrível.',
    href: 'https://wa.me/5511999999999',
  },
];
