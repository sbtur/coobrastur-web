import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@ui/components/DataEntry/Select';

const meta = {
  title: 'Data Entry/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <option value="">Selecione o número de diárias</option>
      <option value="1">Opção 1</option>
      <option value="2">Opção 2</option>
      <option value="3">Opção 3</option>
    </Select>
  ),
};
