import { Calendar, CalendarCheck } from 'lucide-react';

import { Text } from '@coobrastur/ui/components/data-display/text';

import { DaysBadge } from './days-badge';
import { Dropdown } from './dropdown';

interface Plan {
  id: string;
  name: string;
  type: string;
  badges: {
    type: 'warning' | 'neutral';
    label: string;
  }[];
  days: number;
  validity: {
    start: string;
    end: string;
  };
  installment?: {
    year: number;
    number: number;
  };
}

interface LastReservation {
  id: string;
  name: string;
  checkin: string;
  checkout: string;
}

export function CarrouselDetails({
  plans,
  lastReservation,
  displayLastReservation = true,
}: {
  plans: Plan[];
  lastReservation?: LastReservation;
  displayLastReservation?: boolean;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-full bg-primary-200 rounded-lg shadow-sm flex flex-col relative px-7 py-8 gap-1">
        <div className="absolute top-4 right-0">
          <Dropdown plans={plans} />
        </div>
        {plans.length > 1 ? (
          <>
            <Text size="lg" className="text-white font-bold">
              Meus Planos
            </Text>
            <Text size="sm" className="text-white">
              Você tem mais de um plano ativo.
            </Text>
            <Text size="sm" className="text-white font-bold underline">
              Confira suas opções
            </Text>
          </>
        ) : (
          <>
            <Text size="xs" className="text-white font-bold">
              #{plans[0]?.id}
            </Text>
            {plans[0] && (
              <DaysBadge
                days={plans[0]?.days}
                validity={plans[0]?.validity}
                badges={plans[0]?.badges}
              />
            )}
          </>
        )}
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
      {displayLastReservation && (
        <div className="w-full h-full bg-secondary-200 rounded-lg shadow-sm flex flex-col relative -mt-[20px] px-7 py-8 gap-2">
          {lastReservation ? (
            <>
              <Text size="lg" className="text-primary-300 font-bold truncate">
                {lastReservation.name}
              </Text>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {lastReservation.checkin}
                </div>
                <div className="flex items-center gap-2">
                  <CalendarCheck size={16} />
                  {lastReservation.checkout}
                </div>
              </div>
              <Text size="sm" className="text-primary-100 font-bold underline">
                Ver Voucher
              </Text>
            </>
          ) : (
            <>
              <Text size="sm" className="text-primary-100 font-bold underline">
                Seu próximo destino começa aqui
              </Text>
              <Text size="sm" className="text-primary-100">
                Garanta sua reserva
              </Text>
            </>
          )}
        </div>
      )}
    </div>
  );
}
