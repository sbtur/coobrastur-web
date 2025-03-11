import { ALIGN, SPACING } from './constants';
import { Heading } from './Heading';

import { renderComponent } from '@ui/helpers/render-component';
import { describe, expect, it } from '@ui/tests';

describe('Heading', () => {
  it('should render header element with children correctly', () => {
    const { getByText } = renderComponent(Heading, { children: 'Heading' });
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('HEADER');
  });

  it('should render as div element', () => {
    const { container } = renderComponent(Heading, {
      as: 'div',
      children: 'Heading',
    });
    const header = container.querySelector('div');
    expect(header).toBeInTheDocument();
  });

  it.each(ALIGN)('should apply %s alignment', align => {
    const text = `Heading Alignment ${align}`;
    const { getByText } = renderComponent(Heading, {
      align,
      children: text,
    });
    const heading = getByText(text);

    if (align === 'left') {
      expect(heading).toHaveClass('items-start', 'text-left');
    } else if (align === 'center') {
      expect(heading).toHaveClass('items-center', 'text-center');
    } else {
      expect(heading).toHaveClass('items-end', 'text-right');
    }
  });

  it.each(SPACING)('should apply %s spacing', spacing => {
    const text = `Heading Spacing ${spacing}`;
    const { getByText } = renderComponent(Heading, {
      spacing,
      children: text,
    });
    const heading = getByText(text);
    expect(heading).toHaveClass(
      `mb-${spacing === 'xl' ? '6' : spacing === 'lg' ? '4' : spacing === 'md' ? '3' : '2'}`,
    );
  });

  it('should apply custom className', () => {
    const { getByText } = renderComponent(Heading, {
      className: 'custom-class',
      children: 'Heading Custom Class',
    });
    const heading = getByText('Heading Custom Class');
    expect(heading).toHaveClass('custom-class');
  });
});
