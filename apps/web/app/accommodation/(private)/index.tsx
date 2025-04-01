import { Button } from '@coobrastur/ui/components/button';
import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Section } from '@coobrastur/ui/components/layouts/section';
import { Separator } from '@coobrastur/ui/components/separator';

import { Amenities } from '../components/amenities';
import { CollapsibleDescription } from '../components/collapsible-description';
import { ImageGallery } from '../components/image-gallery';

export default function AccommodationPrivate() {
  return (
    <Container size="xl" className="py-12">
      <Heading className="p-0 gap-0">
        <Badge className="mb-2">Gold</Badge>
        <Title>Intercity Florianópolis</Title>
        <Text>Av. Paulo Fontes, 1210, Centro de Florianópolis</Text>
      </Heading>

      <ImageGallery />

      <div className="flex gap-4 justify-between">
        <main className="grid flex-1 gap-4 md:pr-10">
          <Section>
            <Title as="h3" size="sm" className="mb-3">
              Informações
            </Title>
            <Text>
              Fusce nulla turpis, lobortis eu sollicitudin nec, posuere in arcu.
              Donec facilisis scelerisque lacus. Maecenas a urna nisl. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed velit
              metus, ullamcorper vitae ullamcorper quis, mollis at risus. Fusce
              nulla turpis, lobortis eu sollicitudin nec, posuere in arcu. Donec
              facilisis scelerisque lacus. Maecenas a urna nisl. Fusce nulla
              turpis, lobortis eu sollicitudin nec, posuere in arcu.
            </Text>
            <CollapsibleDescription>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                velit metus, ullamcorper vitae ullamcorper quis, mollis at
                risus. Fusce nulla turpis, lobortis eu sollicitudin nec, posuere
                in arcu. Donec facilisis scelerisque lacus. Maecenas a urna
                nisl. Fusce nulla turpis, lobortis eu sollicitudin nec, posuere
                in arcu.
              </Text>
            </CollapsibleDescription>
          </Section>
          <Section>
            <Title as="h3" size="sm" className="mb-3">
              Comodidades
            </Title>
            <Amenities
              amenities={[
                'airConditioner',
                'bar',
                'cableTv',
                'fan',
                'heating',
                'pool',
              ]}
            />
          </Section>
          <Section>
            <Title as="h3" size="sm" className="mb-3">
              Informações do hotel
            </Title>
            <Text>(21)3529-1216 - (21) 3231-8031</Text>
            <Text>reservas.arosa@rederiohoteis.com.br</Text>
            <Text>rederiohoteis.com/arosa-hotel-na-lapa</Text>
          </Section>
          <Section>
            <Title as="h3" size="sm" className="mb-3">
              Períodos de pacote
            </Title>
            <Text>
              Os <span className="text-highlight">períodos de pacotes</span>{' '}
              podem variar conforme a temporada (baixa, média ou alta) e regras
              específicas do pacote, como datas restritas, mínimo de noites ou
              validade para uso.Para período(s) de feriado(s) e pacote(s), vide{' '}
              <strong>
                políticas de cancelamento e multa em caso de no-show
              </strong>{' '}
              no momento da reserva.
            </Text>
          </Section>
          <Section>
            <Title as="h3" size="sm" className="mb-3">
              Política de gratuidade
            </Title>
            <Text>
              01 criança de até 6 anos será acomodada gratuitamente na mesma
              cama dos pais ou responsáveis. De acordo com o Estatuto da Criança
              e do Adolescente (Lei 8.069/90 Art 82), é proibida a hospedagem de
              criança ou adolescente em hotel, motel, pensão ou estabelecimento
              congênere, salvo se autorizado ou acompanhado pelos pais (em
              conjunto) ou responsável legal, ou portar termo do Juizado de
              Menores com a autorização do pai e mãe ausente. No momento do
              check-in é obrigatório apresentar o documento original de
              identificação quando na presença dos pais ou autorização por
              escrito quando acompanhado de responsável devidamente
              identificado. Essas exigências tem como objetivo proteger a
              criança ou adolescente.
            </Text>
          </Section>
          <Section>
            <Title as="h3" size="sm" className="mb-3">
              Localização
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Section>
        </main>
        <aside className="w-[450px]">
          <div className="grid gap-3 place-items-center rounded-[20px] bg-white p-9 shadow-lg">
            <Badge>Gold</Badge>
            <Title>Intercity Florianópolis</Title>
            <Text>Av. Paulo Fontes, 1210, Centro de Florianópolis</Text>
            <Separator />
            <Button size="lg" className="w-full">
              Assine e planeje sua viagem
            </Button>
          </div>
        </aside>
      </div>
    </Container>
  );
}
