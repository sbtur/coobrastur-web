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
  args: {},
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
