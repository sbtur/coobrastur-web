import { Section } from '@coobrastur/ui/components/layouts/section';
import { Form } from './containers/form/form';
import { SectionAgency } from './containers/section-agency/section-agency';
import { SectionProduct } from './containers/section-product/section-product';
import { Container } from '@coobrastur/ui/components/layouts/container';

import { Image } from '@components/image';
import { PARTNERS } from '@utils/data/partners';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Link } from '@coobrastur/ui/components/data-entry/link';
import { ArrowDown } from '@ui/lib/icons';
import { Icon } from '@coobrastur/ui/components/data-display/icon';

export default async function TravelAgency() {
  return (
    <div>
      <Section className="mt-8 bg-gradient-to-b from-white from-25% to-[#E2F2FF] rounded-[30px] max-w-[1376px] mx-auto w-full lg:h-[618px] flex items-center overflow-hidden">
        <Container className="px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <div className="lg:text-left lg:w-1/2 flex flex-col justify-center">
              <Heading className="text-center items-center lg:text-left lg:items-start">
                <Badge>AGÊNCIA DE VIAGENS</Badge>
                <Title size="xl" className="w-[200px] lg:w-full mt-4">
                  Complemente sua viagem
                </Title>
                <Text size="sm" className="lg:text-[18px] mt-4">
                  Com nossa Agência exclusiva para assinantes, você garante uma
                  viagem completa com toda segurança e atendimento
                  personalizado.
                </Text>
                <Button className="mt-8 px-8 lg:w-2/6">
                  Fale com um agente
                </Button>
                <Link
                  href="#produtos-servicos"
                  className="text-sm text-blue-500 lg:hidden underline gap-2 mt-2 mb-20"
                >
                  Produtos & Serviços
                  <Icon icon={ArrowDown} variant="primary" />
                </Link>
                <div className="hidden lg:flex w-full lg:w-[718px] mt-12 mx-auto gap-4 p-5 rounded-md bg-white shadow-lg justify-around">
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
              </Heading>
            </div>
            <div className="hidden lg:flex lg:w-1/2 justify-end items-center -mt-96">
              <Image
                src="/images/pages/travel-agency/passaporte.png"
                alt="Passaportes"
                width={900}
                height={900}
                className="w-auto max-w-2xl h-auto object-contain -mr-32"
              />
            </div>
          </div>
        </Container>
      </Section>
      <SectionAgency />
      <SectionProduct />
      <Form />
    </div>
  );
}
