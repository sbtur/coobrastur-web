import { BookingForGuest } from '../../../../web/app/(pages)/checkout/components/dependents/booking-for-guest';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BookingForGuest> = {
  title: 'Payments/BookingForGuest',
  component: BookingForGuest,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente para cadastro de hóspede',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BookingForGuest>;

export const Default: Story = {
  args: {},
};

export const WithFirstDegreeRelative: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Exibe o componente com a opção de parente de primeiro grau selecionada',
      },
    },
  },
};
