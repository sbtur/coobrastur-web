import { Image } from '@components/image';
import { PARTNERS } from '@utils/data/partners';

import CategoryIcon from '@images/icons/coobrastur-logo.svg';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-screen">
      <div className="relative lg:h-full w-full lg:block">
        <Image
          src="/images/pages/login/grupo.png"
          alt="Logo"
          fill
          className="object-cover object-[33%_50%] fixed inset-0 -z-10"
          priority
          quality={100}
        />

        <div className="hidden lg:flex w-full lg:w-[618px] mx-auto absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-4 p-5 rounded-md bg-white shadow-lg justify-around">
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
      <div className="flex-1 px-[10px] lg:px-[150px] flex items-center justify-center">
        <div className="flex flex-col gap-4 pb-2 lg:text-left w-full max-w-[760px] lg:pt-0 pt-10">
          <div className="flex justify-center lg:hidden">
            <CategoryIcon
              className={`text-primary-300 hover:scale-105 transition-all duration-300`}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
