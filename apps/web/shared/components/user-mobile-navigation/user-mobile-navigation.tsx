import { Text } from '@coobrastur/ui/components/data-display/text';
import { Button } from '@coobrastur/ui/components/data-entry/button';

import { Image } from '@components/image';
import { PARTNERS } from '@utils/data/partners';

export const UserMobileNavigation = () => {
  return (
    <div className="w-full sticky bottom-0 z-10 lg:hidden bg-background">
      <div className="flex justify-around items-center gap-4 p-2">
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
      <div className="flex gap-4 h-[90px] shadow-lg rounded-t-md overflow-hidden ">
        <Button className="md:w-[45%] h-full rounded-none">Assine Agora</Button>
        <div className="h-full flex-1 flex justify-center items-center gap-2 pr-3">
          <Image
            src="/images/shared/clara-profile.png"
            alt="Converse com a Clara"
            width={40}
            height={40}
          />
          <Text className="leading-5">
            Olá, eu sou a Clara!
            <br />
            <a
              href="#"
              target="_blank"
              className="text-text-highlight text-sm font-bold underline"
            >
              Dúvidas? Fale comigo
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};
