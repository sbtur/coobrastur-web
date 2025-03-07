import { Icon, IconWrapper } from '@coobrastur/ui/components/DataDisplay/Icon';
import { Heart } from '@coobrastur/ui/lib/icons';

export interface BookmarkProps {
  onClick?: () => void;
  active?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Bookmark = ({
  size = 'md',
  onClick,
  active = false,
  className,
}: BookmarkProps) => {
  return (
    <IconWrapper
      as="button"
      size={size}
      className={className}
      onClick={onClick}
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Icon
        icon={Heart}
        variant="neutral"
        className={`w-1/2 h-1/2 transition-transform hover:scale-110 hover:fill-neutral-400 ${
          active ? 'fill-neutral-400' : ''
        }`}
      />
    </IconWrapper>
  );
};
