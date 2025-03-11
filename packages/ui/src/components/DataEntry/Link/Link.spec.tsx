import { LINK_VARIANTS, LinkVariant } from './constants';
import { Link } from './Link';

import { renderComponent } from '@ui/helpers/render-component';
import { describe, expect, it } from '@ui/tests';

const variants = Object.values(LINK_VARIANTS);

describe('Link', () => {
  it.each(variants)(
    'should create a snapshot for %s variant',
    (variant: LinkVariant) => {
      expect(
        renderComponent(Link, {
          href: '/test',
          children: variant.charAt(0).toUpperCase() + variant.slice(1),
          variant,
        }),
      ).toMatchSnapshot();
    },
  );

  it('should render children correctly', () => {
    const { getByText } = renderComponent(Link, {
      href: '/test',
      children: 'Default',
    });
    expect(getByText('Default')).toBeInTheDocument();
    expect(getByText('Default')).toHaveAttribute('href', '/test');
  });

  it('should apply target attribute', () => {
    const { getByText } = renderComponent(Link, {
      href: '/test',
      children: 'Target Blank',
      target: '_blank',
    });
    expect(getByText('Target Blank')).toHaveAttribute('target', '_blank');
  });
});
