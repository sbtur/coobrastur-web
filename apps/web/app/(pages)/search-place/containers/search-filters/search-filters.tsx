import { Section } from '@coobrastur/ui/components/layouts/section';

import { CATEGORY } from '../../helpers/category';
import { CarouselFilters } from './carousel-filters';

import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Container } from '@ui/components/layouts/container';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@ui/components/navigation/dropdown-menu';
import { ChevronDown, Hotel } from '@ui/lib/icons';

export const SearchFilters = () => {
  return (
    <Section spacing="md" className="lg:shadow-lg lg:mb-8">
      <Container className="max-w-7xl lg:px-8 lg:flex items-center justify-between">
        <Text className="hidden lg:block">
          Hotéis em <br />
          <span className="font-primary text-primary-300 text-2xl font-bold">
            Florianópolis
          </span>
        </Text>
        <CarouselFilters />
        <div className="w-fit mx-auto lg:mx-0 border border-border rounded-md p-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
              <Icon icon={Hotel} variant="primary" />
              Categoria do Hotel
              <Icon icon={ChevronDown} variant="primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background rounded-lg w-[260px]">
              <DropdownMenuLabel className="font-semibold border-b border-border mb-1 gap-2">
                Selecione a Categoria
              </DropdownMenuLabel>
              {CATEGORY.map(category => (
                <DropdownMenuItem
                  key={category.value}
                  className="p2 cursor-pointer hover:bg-secondary-100 rounded-sm"
                >
                  {category.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </Section>
  );
};
