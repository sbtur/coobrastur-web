import { Image } from '@components/image';
import { PARTNERS } from '@utils/data/partners';

import CategoryIcon from '@images/icons/coobrastur-logo.svg';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-2 lg:h-screen">
      <div className="hidden lg:block relative lg:h-full w-full">
        <Image
          src="/images/pages/login/grupo.png"
          alt="Logo"
          fill
          className="object-cover object-[30%_50%] fixed inset-0 -z-10"
          priority
          quality={100}
        />

        <div className="flex w-9/12 absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-4 p-5 rounded-md bg-white shadow-lg justify-around">
          {PARTNERS.map(partner => (
            <div key={partner.alt} className="max-w-[130px]">
              <Image
                {...partner}
                width={130}
                height={30}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-8 p-8 lg:0 lg:grid lg:items-center">
        <CategoryIcon className="w-[55px] h-[46px] mx-auto text-primary-300 lg:hidden" />
        <div className="max-full lg:max-w-[480px] mx-auto">{children}</div>
      </div>
    </div>
  );
}
