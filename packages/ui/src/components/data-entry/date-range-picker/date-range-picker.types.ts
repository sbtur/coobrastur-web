import { DateRange, DayPicker } from 'react-day-picker';

import { DATE_FIELD_ID } from './date-range-picker.constants';

export type DateRangePickerProps = React.ComponentProps<typeof DayPicker> & {
  className?: string;
  error?: boolean;
  errorMessage?: string;
  minDays?: number;
  maxDays?: number;
  defaultValue?: DateRange;
};

export type UseDataRangeActionsProps = {
  defaultValue?: DateRange;
};

export type UseDataRangeActionsReturn = {
  activeButtonClassName: string;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  date: DateRange | undefined;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  isActiveButton: keyof typeof DATE_FIELD_ID | null;
  setIsActiveButton: React.Dispatch<
    React.SetStateAction<keyof typeof DATE_FIELD_ID | null>
  >;
};
