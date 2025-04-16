import {
  ResponsiveLargerThan,
  ResponsiveSmallerThan,
} from '@/shared/components/responsive';

import { AccommodationDialogLarger } from './accommodation-dialog-larger';
import { AccommodationDialogMobile } from './accommodation-dialog-mobile';

type AccommodationDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: (open: boolean) => void;
};

export function AccommodationDialog({
  isOpen,
  onClose,
  onOpenChange,
}: AccommodationDialogProps) {
  return (
    <>
      <ResponsiveLargerThan breakpoint="lg">
        <AccommodationDialogLarger
          isOpen={isOpen}
          onClose={onClose}
          onOpenChange={onOpenChange}
        />
      </ResponsiveLargerThan>
      <ResponsiveSmallerThan breakpoint="lg">
        <AccommodationDialogMobile
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      </ResponsiveSmallerThan>
    </>
  );
}
