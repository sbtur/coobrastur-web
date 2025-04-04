'use client';

import Image from 'next/image';

import { Link } from '@components/link';

import { PAGE_NAME } from '@/shared/helpers/page-names';

import { useHeader } from '../../hooks/use-header';

import logoDark from '@images/shared/logos/logo-grupo-coobrastur-dark.png';
import logoLight from '@images/shared/logos/logo-grupo-coobrastur-light.png';

export const Logo = ({ light }: { light?: boolean }) => {
  const { isLight } = useHeader({ light });

  return (
    <div className="w-[180px] lg:w-[245px]">
      <Link href={PAGE_NAME.home}>
        <Image
          src={isLight ? logoLight : logoDark}
          alt="Logo Grupo Coobrastur"
          width={245}
          height={36}
          className="w-[180px] h-auto lg:w-[245px] lg:h-[36px]"
        />
      </Link>
    </div>
  );
};
