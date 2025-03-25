import {
  TEXT_ALIGN,
  TEXT_ELEMENTS,
  TEXT_SIZE,
  TEXT_SPACING,
  TEXT_VARIANT,
  TEXT_WEIGHT,
} from './contants';
import { Text } from './text';

import { renderComponent } from '@ui/helpers/render-component';
import { describe, expect, it } from '@ui/tests';

describe('Text', () => {
  it('should render children correctly', () => {
    const { container } = renderComponent(Text, {
      children: 'Sample Text',
    });
    expect(container).toHaveTextContent('Sample Text');
  });

  it.each(TEXT_ELEMENTS)('should render as %s element', as => {
    const { container } = renderComponent(Text, {
      as,
      children: 'Text',
    });
    const element = container.firstElementChild;
    expect(element?.tagName.toLowerCase()).toBe(as);
  });

  it.each(TEXT_SIZE)('should apply %s size', size => {
    const { container } = renderComponent(Text, {
      size,
      children: 'Text',
    });
    const expectedClass =
      size === 'lg' ? 'text-xl' : size === 'xl' ? 'text-2xl' : `text-${size}`;
    expect(container.firstElementChild).toHaveClass(expectedClass);
  });

  it.each(TEXT_SPACING)('should apply %s spacing', spacing => {
    const { container } = renderComponent(Text, {
      spacing,
      children: 'Text',
    });
    expect(container.firstElementChild).toHaveClass(
      `mb-${spacing === 'none' ? '0' : spacing === 'lg' ? '4' : spacing === 'md' ? '2' : '1'}`,
    );
  });

  it.each(TEXT_WEIGHT)('should apply %s weight', weight => {
    const { container } = renderComponent(Text, {
      weight,
      children: 'Text',
    });
    expect(container.firstElementChild).toHaveClass(`font-${weight}`);
  });

  it.each(TEXT_ALIGN)('should apply %s alignment', align => {
    const { container } = renderComponent(Text, {
      align,
      children: 'Text',
    });
    expect(container.firstElementChild).toHaveClass(`text-${align}`);
  });

  it.each(TEXT_VARIANT)('should match snapshot for %s variant', variant => {
    const { container } = renderComponent(Text, {
      variant,
      children: 'Text',
    });
    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('should apply truncate class when truncate is true', () => {
    const { container } = renderComponent(Text, {
      truncate: true,
      children: 'Text',
    });
    expect(container.firstElementChild).toHaveClass('truncate');
  });

  it('should apply custom className', () => {
    const { container } = renderComponent(Text, {
      className: 'custom-class',
      children: 'Text',
    });
    expect(container.firstElementChild).toHaveClass('custom-class');
  });

  it('should match snapshot with default props', () => {
    const { container } = renderComponent(Text, {
      children: 'Text',
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
