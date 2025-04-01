import { Image } from '@/shared/components/image';

export const ImageGallery = () => {
  return (
    <div className="mt-4 flex gap-3 justify-between">
      <div className="flex-1">
        <Image
          src="/images/mocks/places/place-1.jpg"
          width={790}
          height={450}
          alt="Intercity"
          className="rounded-[10px] h-[453px] w-full object-cover"
        />
      </div>
      <div className="grid gap-3">
        <Image
          src="/images/mocks/places/place-2.jpg"
          width={447}
          height={220}
          alt="Intercity"
          className="rounded-[10px] h-[220px]"
        />
        <Image
          src="/images/mocks/places/place-3.jpg"
          width={447}
          height={220}
          alt="Intercity"
          className="rounded-[10px] h-[220px]"
        />
      </div>
    </div>
  );
};
