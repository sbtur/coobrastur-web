import Image from 'next/image';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, CalendarCheck, Users } from 'lucide-react';

import {
  BadgePlan,
  type BadgePlanValue,
} from '@coobrastur/ui/components/data-display/badge-plan/badge-plan';
import { Title } from '@coobrastur/ui/components/data-display/title';

import { AditionalFees } from './aditional-fees';

import { Card } from '@ui/components/data-display/card';
import { Separator } from '@ui/components/data-display/separator';
import { Text } from '@ui/components/data-display/text';
import { Button } from '@ui/components/data-entry/button';

type AdditionalFees = {
  description: string;
  value: number;
}[];

interface SidebarProps {
  hotelImage: string;
  hotelName: string;
  location: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  rooms: number;
  planType: BadgePlanValue;
  planSubType: string;
  totalNights: number;
  additionalFees?: AdditionalFees;
  handleFinalizeReservation: () => void;
}

export function Sidebar({
  hotelImage,
  hotelName,
  location,
  checkIn,
  checkOut,
  guests,
  rooms,
  planType,
  planSubType,
  totalNights,
  additionalFees,
  handleFinalizeReservation,
}: SidebarProps) {
  return (
    <Card className="p-6 space-y-6 max-w-[477px]">
      <div className="flex gap-4">
        <div className="relative w-[120px] h-[118px] rounded-md overflow-hidden">
          <Image
            src={hotelImage}
            alt={hotelName}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <BadgePlan planType={planType} />

          <Title className="text-lg font-semibold text-primary-300">
            {hotelName}
          </Title>
          <Text size="xs" className="text-neutral-500">
            {location}
          </Text>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-primary-300" />
            <Text size="sm" className="font-semibold text-primary-300">
              Entrada:{' '}
              <span className="text-sm font-medium text-neutral-500">
                {format(checkIn, "dd'/'MM'/'yyyy", { locale: ptBR })}
              </span>
            </Text>
          </div>
          <div className="flex items-center gap-1">
            <CalendarCheck className="w-4 h-4 text-primary-300" />
            <Text size="sm" className="font-semibold text-primary-300">
              Saída:{' '}
              <span className="text-sm font-medium text-neutral-500">
                {format(checkOut, "dd'/'MM'/'yyyy", { locale: ptBR })}
              </span>
            </Text>
          </div>
        </div>
        <Text size="sm" className="text-primary-300 flex items-center gap-1">
          <Users className="w-4 h-4 text-primary-300" />
          {rooms} Quarto{rooms === 1 ? '' : 's'}, {guests} Hóspede
          {guests === 1 ? '' : 's'}
        </Text>
      </div>

      <Separator />

      <div className="flex justify-between items-center ">
        <Text size="sm" className="text-neutral-400">
          Diárias utilizadas
        </Text>
        <Text
          size="base"
          className="font-bold text-highlight-100 flex flex-col items-end"
        >
          {' '}
          {totalNights} Diária{totalNights === 1 ? '' : 's'}
          <Text
            size="xs"
            className="text-muted-foreground font-normal uppercase text-neutral-500 flex items-end"
          >
            {planType} {planSubType}
          </Text>
        </Text>
      </div>

      {additionalFees && additionalFees.length > 0 && (
        <>
          <Separator />

          <div className="space-y-2">
            <Text size="sm" className="text-neutral-400">
              Valores adicionais:
            </Text>

            {additionalFees.map(fee => (
              <AditionalFees
                key={fee.description}
                description={fee.description}
                value={fee.value}
              />
            ))}
          </div>
        </>
      )}

      <Button className="w-full" onClick={handleFinalizeReservation}>
        Finalizar Reserva
      </Button>
    </Card>
  );
}
