import { Icon, IconWrapper } from '@ui/components/data-display/icon';
import { Heart } from '@ui/lib/icons';

export type BookmarkProps = {
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  dataTestId?: string;
};

export const Bookmark = ({
  onClick,
  isActive = false,
  className,
  dataTestId = 'bookmark',
}: BookmarkProps) => {
  return (
    <IconWrapper
      as="button"
      className={className}
      onClick={onClick}
      aria-label={isActive ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={isActive}
      data-testid={dataTestId}
    >
      <Icon
        icon={Heart}
        variant="neutral"
        className={`transition-transform hover:scale-110 hover:fill-neutral-400 ${
          isActive ? 'fill-neutral-400' : ''
        }`}
      />
    </IconWrapper>
  );
};
