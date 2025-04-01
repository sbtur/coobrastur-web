'use client';

import { format } from 'date-fns';
import { CalendarCheckIcon, CalendarIcon } from 'lucide-react';

import { Icon } from '../../data-display/icon';
import { Label } from '../label';
import { DATE_FIELD_ID } from './date-range-picker.constants';
import { DateRangePickerProps } from './date-range-picker.types';
import { useDataRangeActions } from './use-data-range-actions';

import { Button } from '@ui/components/data-entry/button';
import { Calendar } from '@ui/components/data-entry/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@ui/components/data-entry/popover';
import { cn } from '@ui/lib/utils';

export function DateRangePicker({
  className,
  disabled,
  error,
  errorMessage,
  minDays,
  maxDays,
  defaultValue,
}: DateRangePickerProps) {
  const {
    activeButtonClassName,
    setDate,
    date,
    setIsOpen,
    isOpen,
    containerRef,
    isActiveButton,
    setIsActiveButton,
  } = useDataRangeActions({ defaultValue });

  return (
    <div className={cn('flex flex-col gap-2', className)} ref={containerRef}>
      <div className="flex gap-4">
        <div className="grid gap-1.5">
          <Label
            htmlFor="check-in"
            className={cn(
              'text-sm font-medium text-neutral-500',
              error && 'text-destructive',
            )}
          >
            Data de Check-in
          </Label>
          <Button
            id="check-in"
            variant="outline"
            className={cn(
              'w-[200px] justify-start text-gray-600 text-left font-normal bg-white rounded-lg border-gray-200',
              error && 'border-destructive',
              isActiveButton === DATE_FIELD_ID.checkIn && activeButtonClassName,
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
            <Icon icon={CalendarIcon} variant="secondary" />
            {date?.from ? format(date.from, 'dd/MM/yyyy') : 'Data de check-in'}
          </Button>
        </div>

        <div className="grid gap-1.5">
          <Label
            htmlFor="check-out"
            className={cn(
              'text-sm font-medium text-neutral-500',
              error && 'text-destructive',
            )}
          >
            Data de Check-out
          </Label>
          <Button
            id="check-out"
            variant="outline"
            className={cn(
              'w-[200px] justify-start text-gray-600 text-left font-normal bg-white rounded-lg border-gray-200',
              error && 'border-destructive',
              isActiveButton === DATE_FIELD_ID.checkOut &&
                activeButtonClassName,
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
            <Icon icon={CalendarCheckIcon} variant="secondary" />
            {date?.to ? format(date.to, 'dd/MM/yyyy') : 'Data de check-out'}
          </Button>
        </div>
      </div>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger />
        <PopoverContent
          className="w-auto p-0 bg-white rounded-xl shadow-lg border-0 -ml-10"
          align="start"
          side="bottom"
          sideOffset={8}
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
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
