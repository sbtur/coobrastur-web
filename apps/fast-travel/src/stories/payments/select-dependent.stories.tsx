import { SelectDependent } from '../../../../web/app/(pages)/checkout/components/dependents/select-dependent';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SelectDependent> = {
  title: 'Payments/SelectDependent',
  component: SelectDependent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Formulário para seleção de dependente (main, dependent)',
      },
    },
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

const handleSubmit = (data: {
  dependent: string;
  firstName: string;
  lastName: string;
}) => {
  console.log('handleSubmit', data);
};

const baseArgs = {
  handleSubmit,
};

export const Default: Story = {
  args: {
    ...baseArgs,
    firstName: 'João',
    lastName: 'Silva',
  },
};

export const Mobile: Story = {
  args: {
    ...baseArgs,
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
    ...baseArgs,
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
    ...baseArgs,
    firstName: 'Ana',
    lastName: 'Souza',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
