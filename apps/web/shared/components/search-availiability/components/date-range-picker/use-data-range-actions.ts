import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-day-picker';

import { DATE_FIELD_ID } from './date-range-picker.constants';
import { UseDataRangeActionsReturn } from './date-range-picker.types';

export const useDataRangeActions = (): UseDataRangeActionsReturn => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState<
    keyof typeof DATE_FIELD_ID | null
  >(null);

  const activeButtonClassName =
    'border-highlight-100 ring-highlight-100 transition-all duration-300 scale-105';

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelectDate = (date: DateRange | undefined) => {
    if (!date) {
      return;
    }

    setDate(date);
  };

  useEffect(() => {
    function handleChangeDateButtonFocus(event: MouseEvent) {
      const target = event.target as HTMLElement;

      if (
        target.matches('button[name="day"]') &&
        isActiveButton === DATE_FIELD_ID.checkIn
      ) {
        setIsActiveButton(DATE_FIELD_ID.checkOut);
      }
    }

    document.addEventListener('click', handleChangeDateButtonFocus);
    return () => {
      document.removeEventListener('click', handleChangeDateButtonFocus);
    };
  }, [date, isActiveButton]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const isInsidePopover = document
        .querySelector('[role="dialog"]')
        ?.contains(target);

      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        !isInsidePopover
      ) {
        setIsActiveButton(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    activeButtonClassName,
    handleSelectDate,
    date,
    setIsOpen,
    isOpen,
    containerRef,
    isActiveButton,
    setIsActiveButton,
  };
};
