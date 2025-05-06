'use client';

import { format } from 'date-fns';
import { CalendarCheckIcon, CalendarIcon } from 'lucide-react';

import { Icon } from '../../data-display/icon';
import { Label } from '../label';
import { DATE_FIELD_ID } from './date-range-picker.constants';
import { DateRangePickerProps } from './date-range-picker.types';
import { useDataRangeActions } from './use-data-range-actions';

import { Calendar } from '@ui/components/data-entry/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@ui/components/data-entry/popover';
import { cn } from '@ui/lib/utils';

export function DateRangePicker({
  disabled,
  error,
  errorMessage,
  minDays,
  maxDays,
  defaultValue,
  onSelectDate,
}: DateRangePickerProps) {
  const {
    activeButtonClassName,
    date,
    setIsOpen,
    isOpen,
    containerRef,
    isActiveButton,
    setIsActiveButton,
    handleSelectDate,
  } = useDataRangeActions({ defaultValue, onSelectDate });

  return (
    <div className="w-full flex flex-col" ref={containerRef}>
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="grid gap-1.5">
          <Label
            htmlFor="check-in"
            className={cn(
              'text-sm font-semibold text-white',
              error && 'text-destructive'
            )}
          >
            Data de Check-in
          </Label>
          <button
            id="check-in"
            className={cn(
              'w-full p-2 px-3 justify-start font-secondary text-gray-600 text-left font-semibold bg-white items-center flex gap-2 whitespace-nowrap rounded-md text-base border-gray-200 border-2 hover:bg-secondary-100',
              error && 'border-destructive',
              isActiveButton === DATE_FIELD_ID.checkIn && activeButtonClassName
            )}
            aria-label="Selecione a data de check-in"
            onClick={() => {
              setIsOpen(true);
              setIsActiveButton(prevState => {
                if (prevState === DATE_FIELD_ID.checkIn) {
                  setIsOpen(false);
                  return null;
                }

                return DATE_FIELD_ID.checkIn;
              });
            }}
          >
            <Icon icon={CalendarIcon} variant="primary" />
            {date?.from ? format(date.from, 'dd/MM/yyyy') : 'Check-in'}
          </button>
        </div>

        <div className="grid gap-1.5">
          <Label
            htmlFor="check-out"
            className={cn(
              'text-sm font-semibold text-white',
              error && 'text-destructive'
            )}
          >
            Data de Check-out
          </Label>
          <button
            id="check-out"
            className={cn(
              'w-full p-2 px-3 justify-start font-secondary text-gray-600 text-left font-semibold bg-white items-center flex gap-2 whitespace-nowrap rounded-md text-base border-gray-200 border-2 hover:bg-secondary-100',
              error && 'border-destructive',
              isActiveButton === DATE_FIELD_ID.checkOut && activeButtonClassName
            )}
            onClick={() => {
              setIsOpen(true);
              setIsActiveButton(prevState => {
                if (prevState === DATE_FIELD_ID.checkOut) {
                  setIsOpen(false);
                  return null;
                }

                return DATE_FIELD_ID.checkOut;
              });
            }}
            aria-label="Selecione a data de check-out"
          >
            <Icon icon={CalendarCheckIcon} variant="primary" />
            {date?.to ? format(date.to, 'dd/MM/yyyy') : 'Check-out'}
          </button>
        </div>
      </div>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger />
        <PopoverContent
          className="w-[340px] lg:w-[505px] p-0 bg-white rounded-xl shadow-lg border-0 lg:-ml-5"
          align="start"
          side="bottom"
          sideOffset={8}
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelectDate}
            numberOfMonths={2}
            min={minDays}
            max={maxDays}
            disabled={disabled}
          />
        </PopoverContent>
      </Popover>
      {error && errorMessage && (
        <p className="text-sm text-danger">{errorMessage}</p>
      )}
    </div>
  );
}
