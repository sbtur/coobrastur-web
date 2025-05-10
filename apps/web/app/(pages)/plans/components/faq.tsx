import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@coobrastur/ui/components/data-display/accordion';
import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';

export const FAQ = () => {
  return (
    <div className="w-11/12 mx-auto mt-14">
      <Badge>Principais Dúvidas</Badge>

      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Title as="h3" size="sm" className="text-white">
              O que é uma Assinatura de Hotéis?
            </Title>
          </AccordionTrigger>
          <AccordionContent>
            <Text size="sm" className="text-white ">
              Ao fazer uma Assinatura de Hotéis, você adquire diárias hoteleiras
              que serão disponibilizadas todos os anos de acordo com o plano de
              assinatura e quantidade que você escolher, podendo ser utilizadas
              nos mais de 2 mil hotéis credenciados em todo o Brasil. Todas as
              diárias incluem café da manhã, sem custo adicional!
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="text-white">
          <AccordionTrigger>
            <Title as="h3" size="sm" className="text-white">
              Por que ter uma Assinatura de Hotéis?
            </Title>
          </AccordionTrigger>
          <AccordionContent>
            <Text size="sm" className="text-white">
              A Assinatura de Hotéis disponibiliza diárias com até 60% de
              economia comparado a sites de hospedagens e você pode
              personalizá-la com a categoria dos hotéis e o período de
              utilização das diárias para 2 ou 3 pessoas no ano. Ou seja, essa é
              a melhor forma de garantir as melhores hospedagens, com o melhor
              preço e toda a segurança que apenas uma empresa há mais de 35 anos
              no mercado e 75 mil assinantes pode entregar!
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="text-white">
          <AccordionTrigger>
            <Title as="h3" size="sm" className="text-white">
              Quais são as formas de pagamento?
            </Title>
          </AccordionTrigger>
          <AccordionContent>
            <Text size="sm" className="text-white">
              O pagamento da Assinatura é realizado por mensalidades: após o
              pagamento da taxa de adesão e primeira mensalidade, são
              disponibilizadas o número de diárias contratadas na assinatura. A
              cada 12 mensalidades pagas, completa-se um período do plano (1
              ano) e inicia-se o próximo, quando um novo lote de diárias será
              disponibilizado. As 12 mensalidades anuais podem ser pagas por
              meio de cartão de crédito e os valores são descontados mês a mês,
              não comprometendo o limite do cartão.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
