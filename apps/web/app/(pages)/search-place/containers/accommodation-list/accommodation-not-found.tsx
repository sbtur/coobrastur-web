import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Content } from '@coobrastur/ui/components/layouts/content';
import { SearchX } from '@coobrastur/ui/lib/icons';

export const AccommodationNotFound = () => {
  return (
    <Container as="section" className="flex flex-col h-full pt-0 pb-8 lg:pb-14">
      <Content className="flex flex-col items-center justify-center text-center gap-4 h-full text-2xl leading-10 font-bold text-primary-300">
        <Icon
          icon={SearchX}
          variant="highlight"
          className="w-[60px] h-[60px]"
        />
        Não encontramos disponibilidade para o período selecionado.
        <br />
        Que tal tentar outro período?
      </Content>
    </Container>
  );
};
