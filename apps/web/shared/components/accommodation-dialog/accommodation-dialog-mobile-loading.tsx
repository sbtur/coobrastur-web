import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@coobrastur/ui/components/data-display/sheet';
import { Skeleton } from '@coobrastur/ui/components/data-display/skeleton';

export function AccommodationDialogMobileLoading() {
  return (
    <div className="max-w-[980px] h-full flex flex-col">
      <div className="relative h-[290px]">
        <Skeleton className="h-full w-full" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className="flex gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-2 w-2 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <SheetHeader>
          <SheetTitle asChild>
            <Skeleton className="h-8 w-3/4" />
          </SheetTitle>
          <SheetDescription asChild>
            <Skeleton className="h-4 w-1/2" />
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-6 w-32" />
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        </div>

        <Skeleton className="h-6 w-48" />
      </div>

      <div className="p-6">
        <Skeleton className="h-12 w-full rounded-[10px]" />
      </div>
    </div>
  );
}
