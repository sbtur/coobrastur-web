import { useState } from 'react';

import {
  Calendar,
  DateRange,
} from '@coobrastur/ui/components/data-entry/calendar';

import type { Meta } from '@storybook/react';

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
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <Calendar mode="single" selected={date} onSelect={setDate} />;
};

export const DateRage = () => {
  const todayDate = new Date();
  const twoDaysFromNow = new Date(Date.now() + 48 * 60 * 60 * 1000);

  const [date, setDate] = useState<DateRange | undefined>({
    from: todayDate,
    to: twoDaysFromNow,
  });

  return <Calendar mode="range" selected={date} onSelect={setDate} />;
};
