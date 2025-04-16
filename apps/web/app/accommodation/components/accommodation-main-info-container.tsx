import { Image } from '@/shared/components/image';

type AccommodationMainInfoContainerProps = {
  children: React.ReactNode;
};

export const AccommodationMainInfoContainer = ({
  children,
}: AccommodationMainInfoContainerProps) => {
  return (
    <header className="w-full lg:max-w-[450px] relative">
      <div
        data-layout-measure
        className="w-full lg:max-w-[450px] h-fit lg:h-[450px] border border-neutral-200 rounded-md bg-white p-6 flex flex-col justify-between gap-4 shadow-xl fixed bottom-0 lg:bottom-auto z-10"
      >
        {children}
        <button className="w-[60px] h-[60px] bg-white rounded-full overflow-hidden border-4 border-neutral-100 shadow-md absolute -top-8 right-6 z-10 lg:hidden">
          <Image
            src="/images/shared/clara-profile.png"
            alt="Converse com a Clara"
            width={50}
            height={50}
          />
        </button>
      </div>
    </header>
  );
};
