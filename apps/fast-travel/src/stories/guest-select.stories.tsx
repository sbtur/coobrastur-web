import { Meta, StoryObj } from '@storybook/react';
import { GuestSelect } from '@ui/components/data-entry/guest-select';
import { GuestProvider } from '@ui/components/data-entry/guest-select/guest-context';

const meta = {
  title: 'Components/GuestSelect',
  component: GuestSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <GuestProvider>
        <Story />
      </GuestProvider>
    ),
  ],
} satisfies Meta<typeof GuestSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSave: () => console.log('Salvar'),
  },
};
