import { Button } from './Button';
import { BUTTON_VARIANTS } from './constants';

import {
  beforeEach,
  describe,
  expect,
  it,
  render,
  userEvent,
  vi,
} from '@ui/tests';

const variants = Object.values(BUTTON_VARIANTS) as Array<
  keyof typeof BUTTON_VARIANTS
>;

describe('Button', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it.each(variants)('should create a snapshot for %s variant', variant => {
    expect(
      render(
        <Button variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>,
      ),
    ).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    const { getByRole } = render(<Button>Button</Button>);
    expect(getByRole('button', { name: 'Button' })).toBeInTheDocument();
  });

  it('should handle click events', async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>,
    );

    await userEvent.click(getByRole('button', { name: 'Click me' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    const { getByRole } = render(<Button disabled>Disabled</Button>);
    expect(getByRole('button', { name: 'Disabled' })).toBeDisabled();
  });
});
