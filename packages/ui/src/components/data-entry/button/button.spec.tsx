import { Button } from './button';
import { BUTTON_VARIANTS, ButtonVariant } from './constants';

import { renderComponent } from '@ui/helpers/render-component';
import { beforeEach, describe, expect, it, userEvent, vi } from '@ui/tests';

const variants = Object.values(BUTTON_VARIANTS);

describe('Button', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it.each(variants)(
    'should match a snapshot for %s variant',
    (variant: ButtonVariant) => {
      expect(
        renderComponent(Button, {
          children: variant.charAt(0).toUpperCase() + variant.slice(1),
          variant,
        }),
      ).toMatchSnapshot();
    },
  );

  it('should render children correctly', () => {
    const { getByRole } = renderComponent(Button, {
      children: 'Button',
    });
    expect(getByRole('button', { name: 'Button' })).toBeInTheDocument();
  });

  it('should handle click events', async () => {
    const handleClick = vi.fn();
    const { getByRole } = renderComponent(Button, {
      children: 'Click me',
      onClick: handleClick,
    });

    await userEvent.click(getByRole('button', { name: 'Click me' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    const { getByRole } = renderComponent(Button, {
      children: 'Disabled',
      disabled: true,
    });
    expect(getByRole('button', { name: 'Disabled' })).toBeDisabled();
  });
});
