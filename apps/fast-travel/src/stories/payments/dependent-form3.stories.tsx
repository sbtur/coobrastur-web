import { DependentForm3 } from '../../../../web/app/(pages)/checkout/components/dependents/dependent-form3';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DependentForm3> = {
  title: 'Payments/DependentForm3',
  component: DependentForm3,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DependentForm3>;

export const Default: Story = {
  args: {},
};
