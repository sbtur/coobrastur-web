import { Advantage } from '../types/advantage.types';

import { Banknote, Hotel, MessageSquare, WalletIcon } from '@ui/lib/icons';

export const ADVANTAGES: Advantage[] = [
  {
    icon: Hotel,
    title: 'Mais de 2.000 hotéis',
    description:
      'Hotéis selecionados a dedo para você viver experiências incríveis, com economia e café da manhã sempre garantido para você e um acompanhante.',
  },
  {
    icon: WalletIcon,
    title: 'Pagamento Flexível',
    description:
      '12 mensalidades ao ano com um valor que cabe no seu bolso e com pagamento que não ocupa o limite do seu cartão de crédito.',
  },
  {
    icon: Banknote,
    title: 'Economia certa',
    description:
      'Com nossa Assinatura, você garanta até 60% de economia no valor das diárias em hotéis em comparação a sites de hospedagem.',
  },
  {
    icon: MessageSquare,
    title: 'Atendimento personalizado',
    description:
      'Ajudamos você a viver viagens inesquecíveis com suporte especializado em todas as etapas, do planejamento ao check-out.',
  },
];
