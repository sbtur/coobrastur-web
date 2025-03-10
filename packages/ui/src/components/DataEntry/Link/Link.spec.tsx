import { LINK_VARIANTS } from './constants';
import { Link } from './Link';

import { describe, expect, it, render } from '@ui/tests';

const variants = Object.values(LINK_VARIANTS);

describe('Link', () => {
  it.each(variants)('should create a snapshot for %s variant', variant => {
    expect(
      render(
        <Link href="/test" variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Link>,
      ),
    ).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    const { getByText } = render(<Link href="/test">Default</Link>);
    expect(getByText('Default')).toBeInTheDocument();
    expect(getByText('Default')).toHaveAttribute('href', '/test');
  });

  it('should apply target attribute', () => {
    const { getByText } = render(
      <Link href="/test" target="_blank">
        Target Blank
      </Link>,
    );
    expect(getByText('Target Blank')).toHaveAttribute('target', '_blank');
  });
});
