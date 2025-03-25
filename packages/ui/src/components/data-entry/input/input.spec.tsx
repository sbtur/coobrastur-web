import { Input } from './input';

import { renderComponent } from '@ui/helpers/render-component';
import {
  beforeEach,
  describe,
  expect,
  getByRole,
  it,
  userEvent,
  vi,
} from '@ui/tests';

describe('Input', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    expect(renderComponent(Input, {})).toMatchSnapshot();
  });

  it('should render with correct placeholder', () => {
    const { getByPlaceholderText } = renderComponent(Input, {
      placeholder: 'Placeholder text',
    });

    expect(getByPlaceholderText('Placeholder text')).toBeInTheDocument();
  });

  it('should handle text input correctly', async () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = renderComponent(Input, {
      onChange,
      placeholder: 'Enter text',
    });

    const input = getByPlaceholderText('Enter text');
    await userEvent.type(input, 'Hello World');

    expect(onChange).toHaveBeenCalled();
  });

  it('should be disabled when disabled prop is true', () => {
    const { getByPlaceholderText } = renderComponent(Input, {
      disabled: true,
      placeholder: 'Disabled input',
    });

    expect(getByPlaceholderText('Disabled input')).toBeDisabled();
  });

  it('should have the correct type', () => {
    const { getByPlaceholderText } = renderComponent(Input, {
      type: 'email',
      placeholder: 'Email input',
    });

    expect(getByPlaceholderText('Email input')).toHaveAttribute(
      'type',
      'email',
    );
  });

  it('should apply custom className', () => {
    const { getByPlaceholderText } = renderComponent(Input, {
      className: 'custom-class',
      placeholder: 'Custom class input',
    });

    expect(getByPlaceholderText('Custom class input')).toHaveClass(
      'custom-class',
    );
  });
});
