import { SelectDependent } from '../../../../web/app/(pages)/checkout/components/dependents/select-dependent';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SelectDependent> = {
  title: 'Payments/SelectDependent',
  component: SelectDependent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSelect: data => {
      console.log('Dados selecionados:', data);
    },
    firstName: 'João',
    lastName: 'Silva',
  },
};

export const Mobile: Story = {
  args: {
    onSelect: data => {
      console.log('Dados selecionados:', data);
    },
    firstName: 'Maria',
    lastName: 'Santos',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet: Story = {
  args: {
    onSelect: data => {
      console.log('Dados selecionados:', data);
    },
    firstName: 'Pedro',
    lastName: 'Oliveira',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop: Story = {
  args: {
    onSelect: data => {
      console.log('Dados selecionados:', data);
    },
    firstName: 'Ana',
    lastName: 'Souza',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
