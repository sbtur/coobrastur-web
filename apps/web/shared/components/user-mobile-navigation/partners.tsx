'use client';
import { usePathname } from 'next/navigation';

import { Image } from '@components/image';
import { PARTNERS } from '@utils/data/partners';

export const Partners = () => {
  const pathname = usePathname();

  return (
    <div
      className={`justify-around items-center gap-4 p-2 ${
        pathname === '/' ? 'flex' : 'hidden'
      }`}
    >
      {PARTNERS.map(partner => (
        <div key={partner.alt} className="max-w-[70px]">
          <Image
            {...partner}
            width={70}
            height={18}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};
