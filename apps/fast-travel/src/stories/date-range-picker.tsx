import { addDays } from 'date-fns';

import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@ui/components/data-entry/date-range-picker';

const meta = {
  title: 'Data Entry/Date Range Picker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDefaultValue: Story = {};

export const WithDateValue: Story = {
  args: {
    defaultValue: {
      from: new Date(),
      to: addDays(new Date(), 5),
    },
  },
};

export const WithMinMaxDate: Story = {
  args: {
    minDays: 2,
    maxDays: 15,
    disabled: { before: new Date() },
  },
};
