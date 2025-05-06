import { Calendar, CalendarCheck } from 'lucide-react';

import { Text } from '@coobrastur/ui/components/data-display/text';

import { Dropdown } from './dropdown';

export function CarrouselDetails() {
  const plans = [
    {
      id: '1',
      name: 'Silver Master',
      type: 'silver',
      badges: [
        { type: 'warning' as const, label: 'Gold' },
        { type: 'neutral' as const, label: 'Master' },
      ],
      days: 7,
      validity: {
        start: '01/09/2023',
        end: '31/08/2026',
      },
      installment: {
        year: 1,
        number: 6,
      },
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-full bg-primary-200 rounded-lg shadow-sm flex flex-col relative px-7 py-8 gap-1">
        <div className="absolute top-4 right-4">
          <Dropdown plans={plans} />
        </div>
        <Text size="lg" className="text-white font-bold">
          Meus Planos
        </Text>
        <Text size="sm" className="text-white">
          Você tem mais de um plano ativo.
        </Text>
        <Text size="sm" className="text-white font-bold underline">
          Confira suas opções
        </Text>
      </div>
      <div className="w-full h-full bg-primary-100 rounded-lg shadow-sm flex flex-col relative -mt-[20px] px-7 py-8">
        <Text size="lg" className="text-white font-bold">
          R$ 200,00
        </Text>
        <Text size="sm" className="text-white">
          Lorem ipsum dolor sit
        </Text>
        <Text size="sm" className="text-white font-bold underline">
          Saiba mais
        </Text>
      </div>
      <div className="w-full h-full bg-secondary-200 rounded-lg shadow-sm flex flex-col relative -mt-[20px] px-7 py-8 gap-2">
        <Text size="lg" className="text-primary-300 font-bold truncate">
          Sky Borges Hotel Alpenharus
        </Text>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            10/05/2025
          </div>
          <div className="flex items-center gap-2">
            <CalendarCheck size={16} />
            10/05/2025
          </div>
        </div>
        <Text size="sm" className="text-primary-100 font-bold underline">
          Ver Voucher
        </Text>
      </div>
    </div>
  );
}
