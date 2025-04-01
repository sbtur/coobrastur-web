import { TITLE_ALIGN, TITLE_AS, TITLE_SIZE, TITLE_VARIANT } from './contansts';
import { Title } from './title';

import { renderComponent } from '@ui/helpers/render-component';
import { describe, expect, it } from '@ui/tests';

describe('Title', () => {
  it('should render children correctly', () => {
    const { container } = renderComponent(Title, {
      children: 'Sample Title',
    });
    expect(container).toHaveTextContent('Sample Title');
  });

  it.each(TITLE_AS)('should render as %s element', as => {
    const { container } = renderComponent(Title, {
      as,
      children: 'Title',
    });
    const element = container.firstElementChild;
    expect(element?.tagName.toLowerCase()).toBe(as);
  });

  it.each(TITLE_SIZE)('should match snapshot for %s size', size => {
    const { container } = renderComponent(Title, {
      size,
      children: 'Title',
    });

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it.each(TITLE_VARIANT)('should match snapshot for %s variant', variant => {
    const { container } = renderComponent(Title, {
      variant,
      children: 'Title',
    });

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it.each(TITLE_ALIGN)('should match snapshot for %s alignment', align => {
    const { container } = renderComponent(Title, {
      align,
      children: 'Title',
    });
    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('should apply custom className', () => {
    const { container } = renderComponent(Title, {
      className: 'custom-class',
      children: 'Title',
    });
    expect(container.firstElementChild).toHaveClass('custom-class');
  });
});
