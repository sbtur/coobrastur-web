import {
  CarousselProps,
  CarousselSingle,
  CarousselUI,
} from '@workspace/ui/components/Blocks/Caroussel';

import type { Meta, StoryObj } from '@storybook/react';

const PLACES = Array.from(Array(10).keys()).map(index => ({
  name: `Place ${index + 1}`,
  description: `Description ${index + 1}`,
  image: `/images/places/place-${index + 1}.jpg`,
}));

const meta: Meta<typeof CarousselUI> = {
  title: 'Data Display/Caroussel',
  component: CarousselUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    slides: PLACES,
    options: {
      options: {
        loop: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<CarousselProps>;

export const Default: Story = {
  render: (args: CarousselProps) => <CarousselUI {...args} />,
};

export const AutoPlay: Story = {
  args: {
    options: {
      ...meta.args.options,
      autoplay: {
        active: true,
      },
    },
  },
  render: (args: CarousselProps) => <CarousselUI {...args} />,
};

export const Fade: Story = {
  args: {
    options: {
      ...meta.args.options,
      fade: {
        active: true,
      },
    },
  },
  render: (args: CarousselProps) => <CarousselSingle {...args} />,
};
