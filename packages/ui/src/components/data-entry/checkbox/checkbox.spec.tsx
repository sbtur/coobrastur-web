import { Checkbox } from './checkbox';

import { renderComponent } from '@ui/helpers/render-component';
import { beforeEach, describe, expect, it, userEvent, vi } from '@ui/tests';

describe('Checkbox', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    expect(renderComponent(Checkbox, {})).toMatchSnapshot();
  });

  it('should render unchecked by default', () => {
    const { getByTestId } = renderComponent(Checkbox, {
      id: 'unchecked-checkbox',
      'data-testid': 'unchecked-checkbox',
    });

    expect(getByTestId('unchecked-checkbox')).not.toBeChecked();
  });

  it('should render as checked when checked prop is true', () => {
    const { getByTestId } = renderComponent(Checkbox, {
      id: 'checked-checkbox',
      checked: true,
      'data-testid': 'checked-checkbox',
    });

    expect(getByTestId('checked-checkbox')).toBeChecked();
  });

  it('should call onCheckedChange when clicked', async () => {
    const onCheckedChange = vi.fn();
    const { getByTestId } = renderComponent(Checkbox, {
      id: 'on-checked-change-checkbox',
      onCheckedChange,
      'data-testid': 'on-checked-change-checkbox',
    });

    await userEvent.click(getByTestId('on-checked-change-checkbox'));
    expect(onCheckedChange).toHaveBeenCalledTimes(1);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('should be disabled when disabled prop is true', () => {
    const { getByTestId } = renderComponent(Checkbox, {
      id: 'disabled-checkbox',
      disabled: true,
      'data-testid': 'disabled-checkbox',
    });

    expect(getByTestId('disabled-checkbox')).toBeDisabled();
  });

  it('should not trigger onCheckedChange when disabled', async () => {
    const onCheckedChange = vi.fn();
    const { getByTestId } = renderComponent(Checkbox, {
      id: 'disabled-on-checked-change-checkbox',
      disabled: true,
      onCheckedChange,
      'data-testid': 'disabled-on-checked-change-checkbox',
    });

    await userEvent.click(getByTestId('disabled-on-checked-change-checkbox'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('should apply custom className', () => {
    const { getByTestId } = renderComponent(Checkbox, {
      id: 'custom-class-checkbox',
      className: 'custom-class',
      'data-testid': 'custom-class-checkbox',
    });

    expect(getByTestId('custom-class-checkbox')).toHaveClass('custom-class');
  });
});
