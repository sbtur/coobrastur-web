import { SmsCheck } from '../../../../web/app/(pages)/checkout/components/dependents/sms-check';

import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Payments/Sms',
  component: SmsCheck,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SmsCheck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    phoneNumber: '(11) 98765-4321',
  },
};

export const WithoutAdditionalFees: Story = {
  args: {
    phoneNumber: '(11) 98765-4321',
  },
};
