import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';
import * as RadioGroup from '@radix-ui/react-radio-group';

describe('RadioButton', () => {
  it('should render correctly', () => {
    render(
      <RadioGroup.Root>
        <RadioButton value="test">Test Option</RadioButton>
      </RadioGroup.Root>,
    );

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByText('Test Option')).toBeInTheDocument();
  });

  it('should be disabled when disabled prop is true', () => {
    render(
      <RadioGroup.Root>
        <RadioButton value="test" disabled>
          Test Option
        </RadioButton>
      </RadioGroup.Root>,
    );

    expect(screen.getByRole('radio')).toBeDisabled();
  });
});
