import { FormUI } from '@components/form';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Data Entry/Form',
  component: FormUI,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <FormUI />,
};
