import { ImmediateFamilyForm } from '../../../../web/app/(pages)/checkout/components/dependents/immediate-family-form';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ImmediateFamilyForm> = {
  title: 'Payments/ImmediateFamilyForm',
  component: ImmediateFamilyForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Formulário para cadastro de parente de primeiro grau (conjuge, filho, pai, mãe, tio, tia, avô, avó)',
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ImmediateFamilyForm>;

export const Default: Story = {
  args: {},
};
