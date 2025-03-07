import {
  MENU_ITEMS,
  MenuDesktop,
  MenuItem,
  MenuMobile,
  MenuResponsive,
} from '@coobrastur/ui/components/Blocks/Navigation';

import type { Meta, StoryObj } from '@storybook/react';

const Menu = () => <div />;

const meta = {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <MenuDesktop menus={MENU_ITEMS} />,
};

export const Responsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'medium-768',
    },
  },
  render: () => <MenuResponsive menus={MENU_ITEMS} />,
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'xsmall-375',
    },
  },
  render: () => <MenuMobile menus={MENU_ITEMS} />,
};
