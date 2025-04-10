import Image from 'next/image';

// export const metadata = {
//   title: 'Coobrastur - Login',
//   description: 'Efetue o login para acessar o sistema',
// };

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
        <div className="relative h-full w-full hidden lg:block">
          <Image
            src="/images/pages/login/grupo.png"
            alt="Login"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative h-full w-full px-[15%] py-[20%]">
          <div className="flex flex-col gap-4 pb-2 lg:text-left text-center">
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
    </>
  );
}
