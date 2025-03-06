import { Bookmark } from '@workspace/ui/components/DataDisplay/Bookmark';
import { Dialog } from '@workspace/ui/components/DataDisplay/Dialog';
import { Icon, IconWrapper } from '@workspace/ui/components/DataDisplay/Icon';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Button } from '@workspace/ui/components/DataEntry/Button';
import { Link } from '@workspace/ui/components/DataEntry/Link';
import { Separator } from '@workspace/ui/components/separator';
import { ArrowRight, Share2, X } from '@workspace/ui/lib/icons';

export const HotelDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button type="button">Abrir hotel</Button>
      </Dialog.Trigger>
      <Dialog.Content className="h-full md:h-auto p-0 gap-0" hideCloseButton>
        <Dialog.Close
          asChild
          className="absolute right-3 top-3 md:right-0 lg:-right-7 md:-top-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <button onClick={() => console.log('close')}>
            <Icon
              icon={X}
              className="h-8 w-8 max-md:text-neutral"
              variant="white"
            />
            <span className="sr-only">Fechar</span>
          </button>
        </Dialog.Close>
        <div className="overflow-y-auto md:flex md:rounded-[20px]">
          <div className="md:w-1/2 lg:w-2/3">
            <div className="py-10 px-8 lg:px-10">
              <Dialog.Header>
                <Title as="h2" size="sm">
                  Sky Borges Hotel Alpenhaus
                </Title>
                <Text size="sm">
                  Avenida Borges De Medeiros, 4206, Gramado, RS
                </Text>
              </Dialog.Header>
              <div className="max-h-[280px] py-4 pr-4 mt-6 overflow-y-auto">
                <Text size="sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.O Sky Borges Hotel Alpenhaus é um hotel 4
                  estrelas em Gramado, com fácil acesso às principais atrações
                  da cidade, incluindo o Palácio dos Festivais e o Centro de
                  Convenções Expogramado. Este hotel oferece quartos
                  confortáveis, piscina térmica coberta, sauna e academia.
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
              <div className="text-center mt-6 md:text-left">
                <Link href="/">
                  Ir para a página do Hotel <Icon icon={ArrowRight} />
                </Link>
              </div>
            </div>
            <Separator />
            <Dialog.Footer className="flex-row h-[90px] md:pl-7 lg:pl-10 pr-0 gap-3 items-center justify-center md:justify-start">
              <Bookmark />
              <IconWrapper>
                <Icon icon={Share2} />
              </IconWrapper>
            </Dialog.Footer>
          </div>

          <div className="h-[500px] md:h-auto md:w-1/2 relative pb-[70px] md:pb-0">
            <div className="absolute top-0 right-0">
              <Bookmark onClick={() => console.log('Saved to favorites')} />
            </div>
            <picture>
              <img
                src="/images/places/place-5.jpg"
                alt="Hotel"
                className="w-full h-full object-cover"
              />
            </picture>
            <Button
              size="lg"
              className="absolute bottom-0 left-0 right-0 h-[70px] md:h-[90px] rounded-none"
            >
              Assine e planeje sua viagem{' '}
              <Icon icon={ArrowRight} variant="white" />
            </Button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
