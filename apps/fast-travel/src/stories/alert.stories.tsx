import type { Meta, StoryObj } from '@storybook/react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@ui/components/data-display/alert';

const meta: Meta<typeof Alert> = {
  title: 'Data Display/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'warning', 'success', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: args => (
    <Alert {...args}>
      <AlertDescription>
        Este é um alerta padrão com título e descrição.
      </AlertDescription>
    </Alert>
  ),
};

export const Danger: Story = {
  render: args => (
    <Alert variant="danger" {...args}>
      <AlertDescription>
        Este é um alerta de erro com título e descrição.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: args => (
    <Alert variant="warning" {...args}>
      <AlertDescription>
        Este é um alerta de atenção com título e descrição.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: args => (
    <Alert variant="success" {...args}>
      <AlertDescription>
        Este é um alerta de sucesso com título e descrição.
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: args => (
    <Alert variant="info" {...args}>
      <AlertDescription>
        Este é um alerta informativo com título e descrição.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutTitle: Story = {
  render: args => (
    <Alert {...args}>
      <AlertDescription>
        Este é um alerta sem título, apenas com descrição.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutDescription: Story = {
  render: args => (
    <Alert {...args}>
      <AlertTitle>Apenas título</AlertTitle>
    </Alert>
  ),
};
