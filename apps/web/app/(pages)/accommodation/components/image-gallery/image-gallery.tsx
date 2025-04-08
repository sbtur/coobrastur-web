import { Image } from '@/shared/components/image';

export const ImageGallery = () => {
  return (
    <div className="w-full lg:max-w-[890px] h-[450px]">
      <Image
        src="/images/mocks/places/place-1.jpg"
        width={790}
        height={450}
        alt="Intercity"
        className="rounded-[10px] h-full w-full object-cover"
      />
    </div>
  );
};
