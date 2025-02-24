import { Bookmark } from '@workspace/ui/components/DataDisplay/Bookmark';
import { Dialog } from '@workspace/ui/components/DataDisplay/Dialog';
import { Icon, IconWrapper } from '@workspace/ui/components/DataDisplay/Icon';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Button } from '@workspace/ui/components/DataEntry/Button';
import { Link } from '@workspace/ui/components/DataEntry/Link';
import { Separator } from '@workspace/ui/components/separator';
import { ArrowRight, Share2 } from '@workspace/ui/lib/icons';

import { Image } from '@components/Image';

export const HotelDialog = () => {
  return (
    <Dialog.Root defaultOpen>
      <Dialog.Content className="flex p-0 gap-0">
        <div className="max-w-[480px]">
          <div className="p-10 pr-4">
            <Dialog.Header>
              <Title as="h2" size="sm">
                Sky Borges Hotel Alpenhaus
              </Title>
              <Text size="sm">
                Avenida Borges De Medeiros, 4206, Gramado, RS
              </Text>
            </Dialog.Header>
            <div className="max-h-[280px] pr-4 mt-6 overflow-y-auto">
              <Text size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.O Sky Borges Hotel Alpenhaus é um hotel 4
                estrelas em Gramado, com fácil acesso às principais atrações da
                cidade, incluindo o Palácio dos Festivais e o Centro de
                Convenções Expogramado. Este hotel oferece quartos confortáveis,
                piscina térmica coberta, sauna e academia.
              </Text>

              <div className="mt-6">
                <Title as="h3" size="xs">
                  Comodidades:
                </Title>
                <ul className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm text-text mt-4">
                  <li>Piscina</li>
                  <li>Recepção 24h</li>
                  <li>Pet Friendly</li>
                  <li>Internet</li>
                  <li>Salão de Jogos</li>
                  <li>Estacionamento</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/">
                Ir para a página do Hotel <Icon icon={ArrowRight} />
              </Link>
            </div>
          </div>
          <Separator />
          <Dialog.Footer className="h-[90px] pl-10 pr-0 gap-1 items-center">
            <Bookmark />
            <IconWrapper>
              <Icon icon={Share2} />
            </IconWrapper>
          </Dialog.Footer>
        </div>

        <div className="flex-1 min-h-full relative rounded-r-[20px] overflow-hidden">
          <Image
            src="/images/hotel.jpeg"
            alt="Hotel"
            fill
            className="object-cover"
          />
          <Button
            size="lg"
            className="absolute bottom-0 left-0 right-0 h-[90px] rounded-none rounded-br-[20px]"
          >
            Assine e planeje sua viagem{' '}
            <Icon icon={ArrowRight} variant="white" />
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
