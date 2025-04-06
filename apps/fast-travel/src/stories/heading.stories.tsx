import type { Meta } from '@storybook/react';
import { Heading } from '@ui/components/data-display/heading';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';

const meta = {
  title: 'DataDisplay/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

export const Default = () => (
  <Heading>
    <Title>Center Heading</Title>
    <Text>Center Text</Text>
  </Heading>
);
