import { type BadgePlanValue } from '@coobrastur/ui/components/data-display/badge-plan/badge-plan';

import { Sidebar } from '../../../../web/app/(pages)/checkout/components/sidebar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Payments/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
  hotelImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
  hotelName: 'Shy Borges Hotel Alpenhaus',
  location: 'Avenida Borges De Medeiros, 4206, Gramado, RS',
  checkIn: new Date('2024-03-20'),
  checkOut: new Date('2024-03-23'),
  guests: 2,
  roomType: '1 quarto, 2 Hóspedes',
  totalNights: 3,
  additionalFees: [
    {
      description: 'Cama extra',
      value: 150.0,
    },
    {
      description: 'Diferença de rede',
      value: 100.0,
    },
  ],
  rooms: 1,
  planType: 'SILVER' as BadgePlanValue,
  planSubType: 'MASTER',
  handleFinalizeReservation: () => {},
};

export const Default: Story = {
  args: baseArgs,
};

export const Loading: Story = {
  args: baseArgs,
  parameters: {
    loading: true,
  },
};

export const WithAdditionalFees: Story = {
  args: {
    ...baseArgs,
    hotelName: 'Hotel Serra Azul',
    location: 'Rua Garibaldi, 152, Gramado, RS',
  },
};

export const WithoutAdditionalFees: Story = {
  args: {
    ...baseArgs,
    additionalFees: [],
  },
};
