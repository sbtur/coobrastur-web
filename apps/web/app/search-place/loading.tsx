import { Separator } from '@coobrastur/ui/components/data-display/separator';
import { Skeleton } from '@coobrastur/ui/components/data-display/skeleton';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Content } from '@coobrastur/ui/components/layouts/content';

export default function SearchPlaceLoading() {
  return (
    <main className="flex-1">
      <Container
        as="section"
        className="flex flex-col h-full pt-0 pb-8 lg:pb-14"
      >
        <Content className="flex flex-col flex-1 px-4 lg:px-0">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center w-[400px] h-[100px] mx-auto gap-4">
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-12 w-32 rounded-lg" />
              </div>
            </div>
            <Separator />
            <div className="flex items-center mx-auto gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-32 rounded-lg" />
              ))}
            </div>

            <div className="md:px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <Skeleton className="h-[450px] rounded-lg" />
                  <Skeleton className="mt-4 h-4 w-3/4" />
                  <Skeleton className="mt-2 h-4 w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </Content>
      </Container>
    </main>
  );
}
