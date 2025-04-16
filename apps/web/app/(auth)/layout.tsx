import Image from 'next/image';

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
          alt="Login"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex-1 px-[10px] lg:px-[150px] flex items-center justify-center">
        <div className="flex flex-col gap-4 pb-2 lg:text-left w-full max-w-[760px] lg:pt-0 pt-10">
          <div className="flex justify-center lg:hidden">
            <Image
              src="/images/pages/login/airplane-icon.svg"
              alt="Icone"
              width={55}
              height={55}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
