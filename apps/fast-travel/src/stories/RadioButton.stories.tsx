import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '@ui/components/DataEntry/RadioButton';
import * as RadioGroup from '@radix-ui/react-radio-group';

const meta = {
  title: 'Data Entry/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  render: () => (
    <RadioGroup.Root defaultValue="option1">
      <div className="space-y-4">
        <RadioButton id="r1" value="option1">
          Opção Selecionada
        </RadioButton>

        <RadioButton id="r2" value="option2">
          Opção Não Selecionada
        </RadioButton>

        <RadioButton id="r3" value="option3" disabled>
          Opção Desabilitada
        </RadioButton>

        <RadioButton id="r4" value="option4" disabled checked>
          Opção Desabilitada e Selecionada
        </RadioButton>
      </div>
    </RadioGroup.Root>
  ),
};

export const Selected: Story = {
  render: () => (
    <RadioGroup.Root value="option1">
      <RadioButton id="r1" value="option1">
        Opção Selecionada
      </RadioButton>
    </RadioGroup.Root>
  ),
};

export const Unselected: Story = {
  render: () => (
    <RadioGroup.Root>
      <RadioButton id="r1" value="option1">
        Opção Não Selecionada
      </RadioButton>
    </RadioGroup.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup.Root>
      <RadioButton id="r1" value="option1" disabled>
        Opção Desabilitada
      </RadioButton>
    </RadioGroup.Root>
  ),
};

export const DisabledSelected: Story = {
  render: () => (
    <RadioGroup.Root value="option1">
      <RadioButton id="r1" value="option1" disabled>
        Opção Desabilitada e Selecionada
      </RadioButton>
    </RadioGroup.Root>
  ),
};

export const Group: Story = {
  render: () => (
    <RadioGroup.Root defaultValue="option1">
      <div className="space-y-2">
        <RadioButton id="r1" value="option1">
          Option 1
        </RadioButton>
        <RadioButton id="r2" value="option2">
          Option 2
        </RadioButton>
      </div>
    </RadioGroup.Root>
  ),
};
