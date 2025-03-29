'use client';

import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { buttonVariants } from '@coobrastur/ui/components/button';
import { Icon } from '@coobrastur/ui/components/data-display/icon';

import { cn } from '@ui/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      locale={ptBR}
      classNames={{
        months:
          'bg-white flex flex-col rounded-md p-3 shadow-xl sm:flex-row space-y-4 sm:space-x-8 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm text-neutral-500',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 border border-neutral-300 p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex mb-1',
        head_cell: 'text-neutral-500 rounded-md w-8 font-normal text-sm',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day: 'h-8 w-8 p-0 font-normal text-sm text-neutral-500 rounded-md cursor-pointer hover:text-neutral-500 hover:bg-gray-200/30',
        day_range_start:
          'day-range-start aria-selected:text-white aria-selected:bg-highlight-100',
        day_range_end:
          'day-range-end aria-selected:text-white aria-selected:bg-highlight-100',
        day_selected:
          'bg-highlight-100 text-white hover:bg-highlight-100 hover:text-white focus:bg-highlight-100 focus:text-white',
        day_today: 'bg-gray-200/30 text-neutral-500 aria-selected:text-white',
        day_outside:
          'day-outside text-neutral-300 opacity-50 bg-transparent hover:bg-transparent aria-selected:bg-gray-200/30 aria-selected:text-neutral-300',
        day_disabled:
          'text-neutral-300 opacity-50 bg-transparent hover:bg-transparent cursor-text',
        day_range_middle:
          'text-neutral-500 bg-secondary hover:bg-secondary hover:text-neutral-500 aria-selected:text-neutral-500 rounded-none',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <Icon icon={ChevronLeft} className={cn('', className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <Icon icon={ChevronRight} className={cn('', className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
