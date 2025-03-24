import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@ui/components/DataEntry/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Data Entry/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
      description: 'The size of the switch',
      defaultValue: 'default',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
      defaultValue: false,
    },
    checked: {
      control: 'boolean',
      description: 'The controlled checked state of the switch',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state when uncontrolled',
    },
    onCheckedChange: {
      action: 'checked changed',
      description: 'Function called when the checked state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: (args: React.ComponentProps<typeof Switch>) => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" {...args} />
      <label
        htmlFor="airplane-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  ),
};

export const SizesComparison: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <Switch id="small" size="sm" />
        <label htmlFor="small" className="text-sm">
          Small
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="default" />
        <label htmlFor="default" className="text-sm">
          Default
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="large" size="lg" />
        <label htmlFor="large" className="text-sm">
          Large
        </label>
      </div>
    </div>
  ),
};
