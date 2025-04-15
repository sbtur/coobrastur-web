import { Container } from '@coobrastur/ui/components/layouts/container';
import { Content } from '@coobrastur/ui/components/layouts/content';

export const AccommodationListSkeleton = () => (
  <Container as="section" className="flex flex-col h-full pt-0 pb-8 lg:pb-14">
    <Content className="flex flex-col flex-1 px-4 lg:px-0">
      <div className="md:px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg" />
            <div className="mt-4 h-4 bg-gray-200 rounded w-3/4" />
            <div className="mt-2 h-4 bg-gray-200 rounded w-1/2" />
          </div>
        ))}
      </div>
    </Content>
  </Container>
);
