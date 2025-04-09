import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@coobrastur/ui/components/data-display/accordion';
import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';

export const Policies = () => {
  return (
    <>
      <Heading className="md:w-4/12 xl:w-9/12  p-6 text-left items-center md:items-start">
        <Badge variant="default" className="mt-14">
          Principais Dúvidas
        </Badge>

        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white">
              <Title size="sm" className="text-white">
                O que é uma Assinatura de Hotéis?
              </Title>
            </AccordionTrigger>
            <AccordionContent>
              <Text size="sm" className="text-white ">
                Ao fazer uma Assinatura de Hotéis, você adquire diárias
                hoteleiras que serão disponibilizadas todos os anos de acordo
                com o plano de assinatura e quantidade que você escolher,
                podendo ser utilizadas nos mais de 2 mil hotéis credenciados em
                todo o Brasil. Todas as diárias incluem café da manhã, sem custo
                adicional! 
              </Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="text-white">
            <AccordionTrigger>
              <Title size="sm" className="text-white">
                Por que ter uma Assinatura de Hotéis? 
              </Title>
            </AccordionTrigger>
            <AccordionContent>
              <Text size="sm" className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="text-white">
            <AccordionTrigger>
              <Title size="sm" className="text-white">
                Quais são as formas de pagamento? 
              </Title>
            </AccordionTrigger>
            <AccordionContent>
              <Text size="sm" className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Heading>
    </>
  );
};
