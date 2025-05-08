import { DateRange, DayPicker } from 'react-day-picker';

export type AvailableDatesProps = {
  description: {
    name: string;
    street: string;
  };
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export type DateRangePickerProps = React.ComponentProps<typeof DayPicker> & {
  className?: string;
  error?: boolean;
  errorMessage?: string;
  minDays?: number;
  maxDays?: number;
  defaultValue: DateRange;
  onSelectDate: (date: DateRange | undefined) => void;
};

export type UseAvailableDatesActionsReturn = {
  date: DateRange | undefined;
  handleSelectDate: (date: DateRange | undefined) => void;
  formatedDate: DateRangeFormatted | undefined;
  createRangeDates: (date: Date) => boolean;
  handleSubmitNewDates: () => void;
};

export type DateRangeFormatted =
  | {
      from: string;
      to: string;
    }
  | undefined;
