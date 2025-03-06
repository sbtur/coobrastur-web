import { Icon, IconWrapper } from '@workspace/ui/components/DataDisplay/Icon';
import { Heart } from '@workspace/ui/lib/icons';

export interface BookmarkProps {
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

export const Bookmark = ({
  onClick,
  active = false,
  className,
}: BookmarkProps) => {
  return (
    <IconWrapper
      as="button"
      className={className}
      onClick={onClick}
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Icon
        icon={Heart}
        variant="neutral"
        className={`transition-transform hover:scale-110 hover:fill-neutral-400 ${
          active ? 'fill-neutral-400' : ''
        }`}
      />
    </IconWrapper>
  );
};
