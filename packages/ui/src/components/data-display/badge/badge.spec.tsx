import { Badge } from './badge';
import { BADGE_VARIANTS, BadgeVariant } from './contants';

import { renderComponent } from '@ui/helpers/render-component';
import { describe, expect, it, screen } from '@ui/tests';

describe('Badge', () => {
  const variants = Object.values(BADGE_VARIANTS);
  it('should render children correctly', () => {
    renderComponent(Badge, { children: 'Badge' });
    expect(screen.getByText('Badge')).toBeInTheDocument();
  });

  it.each(variants)(
    'should match snapshot for %s variant',
    (variant: BadgeVariant) => {
      const { container } = renderComponent(Badge, {
        children: 'Test',
        variant,
      });
      expect(container.firstChild).toMatchSnapshot();
    },
  );

  it('should apply custom className', () => {
    const { container } = renderComponent(Badge, {
      children: 'Test Content',
      className: 'custom-class',
    });
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
