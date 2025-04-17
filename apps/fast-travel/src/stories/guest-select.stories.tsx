import { Meta, StoryObj } from '@storybook/react'
import { GuestSelect } from '@ui/components/data-entry/guest-select';

const meta = {
  title: 'Components/GuestSelect',
  component: GuestSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GuestSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    roomNumber: 1,
    adults: {
      value: 1,
      min: 1,
      max: 10,
      label: 'Adultos',
      description: 'Maiores 18 anos',
    },
    childrenGuests: {
      value: 1,
      min: 0,
      max: 10,
      label: 'Crianças',
      description: 'Até 17 anos',
    },
    onAdultsChange: (value: number) => console.log('Adultos:', value),
    onChildrenChange: (value: number) => console.log('Crianças:', value),
    onAddRoom: () => console.log('Adicionar quarto'),
    onSave: () => console.log('Salvar'),
  },
}
