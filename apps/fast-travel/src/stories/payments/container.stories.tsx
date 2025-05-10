import { Container } from '../../../../web/app/(pages)/checkout/components/container';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Container> = {
  title: 'Payments/Container',
  component: Container,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Container para conteúdo do checkout',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4">
        <h2 className="text-lg font-semibold">Conteúdo do Container</h2>
        <p className="text-sm text-gray-600">
          Este é um exemplo de conteúdo dentro do container.
        </p>
      </div>
    ),
  },
};

export const WithLongContent: Story = {
  args: {
    children: (
      <div className="p-4 space-y-4">
        <h2 className="text-lg font-semibold">Container com Conteúdo Longo</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-sm text-gray-600">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    ),
  },
};
