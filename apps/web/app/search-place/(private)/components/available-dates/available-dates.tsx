'use client';
import { ArrowRight, CalendarIcon } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
} from '@coobrastur/ui/components/data-display/dialog/dialog';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Separator } from '@coobrastur/ui/components/data-display/separator/separator';
import { Text } from '@coobrastur/ui/components/data-display/text/text';
import { Title } from '@coobrastur/ui/components/data-display/title/title';
import { Calendar } from '@coobrastur/ui/components/data-entry/calendar/calendar';

import { AvailableDatesProps } from './available-dates.types';
import { useAvailableDatesActions } from './use-available-dates-actions';

export const AvailableDates = ({
  description,
  isOpen,
  setIsOpen,
}: AvailableDatesProps) => {
  const {
    date,
    handleSelectDate,
    formatedDate,
    createRangeDates,
    handleSubmitNewDates,
  } = useAvailableDatesActions();

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogContent className="p-0 max-w-[800px]">
        <DialogHeader className="text-left p-8 pb-4">
          <Title className="text-2xl">{description.name}</Title>
          <Text>{description.street}</Text>
        </DialogHeader>
        <Separator />
        <div className="flex gap-4 mt-4 p-8 pt-4">
          <div className="w-[200px] flex flex-col gap-4">
            <Text className="font-bold">
              Clique em uma data disponível no calendário para atualizar a
              pesquisa.
            </Text>
            <div>
              <span className="text-neutral-500">Data do Check-in</span>
              <div className="w-[155px] flex items-center gap-2 mt-1 border border-neutral-300 text-neutral-500 font-semibold rounded-md px-3 py-2">
                <Icon icon={CalendarIcon} variant="primary" />
                {formatedDate?.from}
              </div>
            </div>
            <div>
              <span className="text-neutral-500">Data do Check-out</span>
              <div className="w-[155px] flex items-center gap-2 mt-1 border border-neutral-300 text-neutral-500 font-semibold rounded-md px-3 py-2">
                <Icon icon={CalendarIcon} variant="primary" />
                {formatedDate?.to}
              </div>
            </div>
          </div>
          <div className="w-fit">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={handleSelectDate}
              numberOfMonths={2}
              disabled={date => createRangeDates(date)}
            />
          </div>
        </div>
        <button
          className="w-full bg-highlight-100 h-[90px] text-white text-base font-bold rounded-b-[20px]"
          onClick={() => {
            setIsOpen(false);
            handleSubmitNewDates();
          }}
        >
          Selecionar período e atualizar busca{' '}
          <Icon icon={ArrowRight} variant="white" />
        </button>
      </DialogContent>
    </Dialog>
  );
};
