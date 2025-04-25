import { Button } from '@coobrastur/ui/components/data-entry/button';

import { Image } from '@/shared/components/image';

import { OUR_SERVICE } from '../../helpers/our-product';

export const ProductLarger = () => {
  return (
    <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-[1024px] mx-auto">
      {OUR_SERVICE.map(item => (
        <div
          key={item.id}
          className="relative group overflow-hidden rounded-[10px] "
        >
          <Image
            src={item.image}
            alt={item.title}
            width={323}
            height={329}
            className="rounded-[10px] w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          />
          <div className="bg-white rounded-[10px] text-primary-300 font-bold font-primary flex items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-[45px] w-[300px] h-[54px]">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};
