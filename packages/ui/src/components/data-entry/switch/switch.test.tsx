import { Switch } from './switch';

import { describe, expect, fireEvent, it, render, screen, vi } from '@ui/tests';

describe('Switch Component', () => {
  it('renders the Switch component correctly', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeInTheDocument();
  });

  it('can be checked and unchecked', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('switch');

    expect(switchElement).not.toBeChecked();

    fireEvent.click(switchElement);
    expect(switchElement).toBeChecked();

    fireEvent.click(switchElement);
    expect(switchElement).not.toBeChecked();
  });

  it('renders with custom size', () => {
    render(<Switch size="sm" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('h-5 w-9');
  });

  it('can be disabled', () => {
    render(<Switch disabled />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeDisabled();
  });

  it('calls the onCheckedChange callback when toggled', () => {
    const handleChange = vi.fn();
    render(<Switch onCheckedChange={handleChange} />);
    const switchElement = screen.getByRole('switch');

    fireEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);

    fireEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('supports keyboard navigation', () => {
    const handleChange = vi.fn();
    render(<Switch onCheckedChange={handleChange} />);
    const switchElement = screen.getByRole('switch');

    switchElement.focus();
    expect(switchElement).toHaveFocus();

    fireEvent.keyDown(switchElement, { key: ' ' });
    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
