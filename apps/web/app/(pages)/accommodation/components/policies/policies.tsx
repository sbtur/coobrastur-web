import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@coobrastur/ui/components/data-display/accordion';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';

export const Policies = () => {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Title as="h4" size="sm">
            Política de gratuidade
          </Title>
        </AccordionTrigger>
        <AccordionContent>
          <Text>
            01 criança de até 6 anos será acomodada gratuitamente na mesma cama
            dos pais ou responsáveis. De acordo com o Estatuto da Criança e do
            Adolescente (Lei 8.069/90 Art 82), é proibida a hospedagem de
            criança ou adolescente em hotel, motel, pensão ou estabelecimento
            congênere, salvo se autorizado ou acompanhado pelos pais (em
            conjunto) ou responsável legal, ou portar termo do Juizado de
            Menores com a autorização do pai e mãe ausente. No momento do
            check-in é obrigatório apresentar o documento original de
            identificação quando na presença dos pais ou autorização por escrito
            quando acompanhado de responsável devidamente identificado. Essas
            exigências tem como objetivo proteger a criança ou adolescente.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <Title as="h4" size="sm">
            Políticas de cancelamento
          </Title>
        </AccordionTrigger>
        <AccordionContent>
          <Text>
            01 criança de até 6 anos será acomodada gratuitamente na mesma cama
            dos pais ou responsáveis. De acordo com o Estatuto da Criança e do
            Adolescente (Lei 8.069/90 Art 82), é proibida a hospedagem de
            criança ou adolescente em hotel, motel, pensão ou estabelecimento
            congênere, salvo se autorizado ou acompanhado pelos pais (em
            conjunto) ou responsável legal, ou portar termo do Juizado de
            Menores com a autorização do pai e mãe ausente. No momento do
            check-in é obrigatório apresentar o documento original de
            identificação quando na presença dos pais ou autorização por escrito
            quando acompanhado de responsável devidamente identificado. Essas
            exigências tem como objetivo proteger a criança ou adolescente.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <Title as="h4" size="sm">
            Políticas de no-show
          </Title>
        </AccordionTrigger>
        <AccordionContent>
          <Text>
            01 criança de até 6 anos será acomodada gratuitamente na mesma cama
            dos pais ou responsáveis. De acordo com o Estatuto da Criança e do
            Adolescente (Lei 8.069/90 Art 82), é proibida a hospedagem de
            criança ou adolescente em hotel, motel, pensão ou estabelecimento
            congênere, salvo se autorizado ou acompanhado pelos pais (em
            conjunto) ou responsável legal, ou portar termo do Juizado de
            Menores com a autorização do pai e mãe ausente. No momento do
            check-in é obrigatório apresentar o documento original de
            identificação quando na presença dos pais ou autorização por escrito
            quando acompanhado de responsável devidamente identificado. Essas
            exigências tem como objetivo proteger a criança ou adolescente.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
