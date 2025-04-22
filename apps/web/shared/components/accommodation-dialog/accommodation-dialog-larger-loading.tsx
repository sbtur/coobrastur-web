import {
  DialogDescription,
  DialogTitle,
} from '@coobrastur/ui/components/data-display/dialog';
import { Skeleton } from '@coobrastur/ui/components/data-display/skeleton';

export function AccommodationDialogLargerLoading() {
  return (
    <div className="max-w-[980px] h-auto flex rounded-[20px] justify-between relative">
      <div className="w-[500px] h-full grid justify-between">
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <DialogTitle asChild>
              <Skeleton className="h-8 w-3/4" />
            </DialogTitle>
            <DialogDescription asChild>
              <Skeleton className="h-4 w-1/2" />
            </DialogDescription>
          </div>

          <div className="py-4 pr-4 h-[280px] overflow-y-auto space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />

            <div className="mt-6 space-y-4">
              <Skeleton className="h-6 w-32" />
              <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-24" />
                ))}
              </div>
            </div>
          </div>

          <Skeleton className="h-6 w-48" />
        </div>
      </div>

      <div className="w-[480px]">
        <Skeleton className="w-full h-[570px]" />
      </div>
    </div>
  );
}
