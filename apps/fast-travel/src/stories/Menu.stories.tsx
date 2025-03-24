import {
  Menu,
  MenuDesktop,
  MenuMobile,
  MenuResponsive,
} from '@components/Menu';
import { MENU_ITEMS } from '@components/Menu/helpers/menu';

import type { Meta, StoryObj } from '@storybook/react';

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
