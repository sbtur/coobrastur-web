import { Skeleton } from '@coobrastur/ui/components/data-display/skeleton';
import { Container } from '@coobrastur/ui/components/layouts/container';

export default function AccommodationLoading() {
  return (
    <div className="bg-white">
      <Container className="grid gap-6 p-0 lg:py-12 lg:px-3 relative">
        <div className="lg:flex gap-4 justify-between relative">
          <div className="w-full lg:max-w-[890px] h-[290px] lg:h-[450px]">
            <Skeleton className="h-full w-full lg:rounded-[10px]" />
          </div>

          <div className="w-full lg:max-w-[450px] h-fit lg:h-[450px] border border-neutral-200 rounded-md bg-white p-6 flex flex-col justify-between gap-4 shadow-xl">
            <div className="space-y-4">
              <Skeleton className="h-8 w-24" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <Skeleton className="h-px w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          </div>
        </div>

        <main className="grid gap-8 max-full lg:max-w-[530px] xl:max-w-[790px] px-6 lg:p-0">
          <section className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </section>

          <section className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-24" />
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-full" />
          </section>
        </main>
      </Container>
    </div>
  );
}
