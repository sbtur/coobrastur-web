import { Bookmark } from './bookmark';

import { renderComponent } from '@ui/helpers/render-component';
import { describe, expect, it, screen, userEvent, vi } from '@ui/tests';

describe('Bookmark', () => {
  it('should render component correctly', () => {
    const { getByRole } = renderComponent(Bookmark, {});
    expect(
      getByRole('button', { name: 'Add to favorites' }),
    ).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = renderComponent(Bookmark, {
      className: 'custom-class',
      dataTestId: 'bookmark-custom-class',
    });
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should call onClick when clicked', async () => {
    const handleClick = vi.fn();
    const { getByTestId } = renderComponent(Bookmark, {
      onClick: handleClick,
      dataTestId: 'bookmark-click',
    });

    await userEvent.click(getByTestId('bookmark-click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should toggle active state', async () => {
    const { getByTestId } = renderComponent(Bookmark, {
      isActive: true,
      dataTestId: 'bookmark-active',
    });

    const button = screen.getByTestId('bookmark-active');
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });
});
