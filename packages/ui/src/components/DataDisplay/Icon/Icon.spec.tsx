import { ICON_SIZES, ICON_VARIANTS } from './constants';
import { Icon } from './Icon';

import { renderComponent } from '@ui/helpers/render-component';
import { Home } from '@ui/lib/icons';
import { describe, expect, it } from '@ui/tests';

describe('Icon', () => {
  const variants = Object.values(ICON_VARIANTS);
  const sizes = Object.keys(ICON_SIZES) as Array<keyof typeof ICON_SIZES>;

  it('should render correctly', () => {
    const { container } = renderComponent(Icon, {
      icon: Home,
    });
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it.each(variants)('should match snapshot for %s variant', variant => {
    expect(
      renderComponent(Icon, {
        icon: Home,
        variant,
      }),
    ).toMatchSnapshot();
  });

  it.each(sizes)('should apply correct size for %s', size => {
    const { container } = renderComponent(Icon, {
      icon: Home,
      size: size as keyof typeof ICON_SIZES,
    });

    const icon = container.querySelector('svg');
    expect(icon).toHaveAttribute('width', ICON_SIZES[size].toString());
    expect(icon).toHaveAttribute('height', ICON_SIZES[size].toString());
  });

  it('should apply custom className', () => {
    const { container } = renderComponent(Icon, {
      icon: Home,
      className: 'custom-class',
    });

    const icon = container.querySelector('svg');
    expect(icon).toHaveClass('custom-class');
  });
});
