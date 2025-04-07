import { useState } from 'react';

import { addDays } from 'date-fns';

import type { Meta } from '@storybook/react';
import { Calendar, DateRange } from '@ui/components/data-entry/calendar';

const meta = {
  title: 'Data Entry/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  args: {
    mode: 'single',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;

export const DatePicker = () => {
  const todayDate = new Date();
  const [date, setDate] = useState<Date | undefined>(todayDate);

  return <Calendar mode="single" selected={date} onSelect={setDate} />;
};

export const DatePickerDisabled = () => {
  const todayDate = new Date();
  const [date, setDate] = useState<Date | undefined>(todayDate);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={{ before: todayDate }}
    />
  );
};

export const DateRage = () => {
  const todayDate = new Date();
  const twoDaysFromNow = addDays(new Date(), 2);

  const [date, setDate] = useState<DateRange | undefined>({
    from: todayDate,
    to: twoDaysFromNow,
  });

  return <Calendar mode="range" selected={date} onSelect={setDate} />;
};
