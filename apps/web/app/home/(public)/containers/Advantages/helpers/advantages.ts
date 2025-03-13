import { Advantage } from '../types/advantage.types';

import { Banknote, Hotel, MessageSquare, WalletIcon } from '@ui/lib/icons';

export const ADVANTAGES: Advantage[] = [
  {
    icon: Hotel,
    title: 'Mais de 2.000 hotéis',
    description:
      'Grande variedade de Hotéis credenciados em todo o Brasil. Lorem ipsum dolor sit amet.',
  },
  {
    icon: WalletIcon,
    title: 'Pagamento Flexível',
    description:
      'Valor mensal que não compromete o limite do seu cartão de crédito. Lorem ipsum dolor sit amet.',
  },
  {
    icon: Banknote,
    title: 'Economia Garantida',
    description: 'Até 60% de economia em comparação com sites de hospedagem.',
  },
  {
    icon: MessageSquare,
    title: 'Atendimento Exclusivo',
    description:
      'Conte com o suporte personalizado que você merece para planejar viagens inesquecíveis.',
  },
];
