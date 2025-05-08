import { DateRange, DayPicker } from 'react-day-picker';

import { DateRangeFormatted } from '../../search-availiability';
import { DATE_FIELD_ID } from './date-range-picker.constants';

export type DateRangePickerProps = React.ComponentProps<typeof DayPicker> & {
  className?: string;
  error?: boolean;
  errorMessage?: string;
  minDays?: number;
  maxDays?: number;
  defaultValue: DateRange;
  onSelectDate: (date: DateRangeFormatted) => void;
};

export type UseDataRangeActionsProps = {
  defaultValue: DateRange;
  onSelectDate: (date: DateRangeFormatted) => void;
};

export type UseDataRangeActionsReturn = {
  activeButtonClassName: string;
  date: DateRange | undefined;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  isActiveButton: keyof typeof DATE_FIELD_ID | null;
  setIsActiveButton: React.Dispatch<
    React.SetStateAction<keyof typeof DATE_FIELD_ID | null>
  >;
  handleSelectDate: (date: DateRange | undefined) => void;
};
