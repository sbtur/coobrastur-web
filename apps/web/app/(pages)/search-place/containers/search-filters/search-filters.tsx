'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@coobrastur/ui/components/data-entry/select';
import { Section } from '@coobrastur/ui/components/layouts/section';
import { Hotel } from '@coobrastur/ui/lib/icons';

import {
  ResponsiveLargerThan,
  ResponsiveSmallerThan,
} from '@/shared/components/responsive/responsive';

import { CATEGORY } from '../../helpers/category';
import { Filters } from './components/filters';
import { FiltersMobile } from './components/filters-mobile';

import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Container } from '@ui/components/layouts/container';

export const SearchFilters = () => {
  return (
    <Section
      spacing="md"
      className="pt-0 xl:p-0 xl:shadow-[0_5px_15px_-2px_rgba(0,0,0,0.1)] xl:mb-8"
    >
      <Container className="max-w-7xl xl:h-[70px] px-0 xl:px-8 xl:flex items-center justify-between">
        <Text className="hidden xl:block">
          Busque por <br />
          <span className="font-primary text-primary-300 text-xl font-bold">
            Estilo de Destino
          </span>
        </Text>

        <ResponsiveLargerThan breakpoint="xl">
          <Filters />
        </ResponsiveLargerThan>
        <ResponsiveSmallerThan breakpoint="xl">
          <FiltersMobile />
        </ResponsiveSmallerThan>

        <Select>
          <SelectTrigger className="w-[200px] max-w-[300px] mx-auto text-text-body focus:outline-none shadow-sm bg-white">
            <SelectValue
              placeholder={
                <>
                  <Icon icon={Hotel} variant="highlight" />{' '}
                  <span className="mx-3">Categoria do Hotel</span>
                </>
              }
            />
          </SelectTrigger>
          <SelectContent className="bg-background rounded-lg w-[260px]">
            <SelectGroup>
              <SelectLabel className="font-semibold border-b border-border mb-1 gap-2">
                Selecione a Categoria
              </SelectLabel>
              {CATEGORY.map(category => (
                <SelectItem
                  key={category.value}
                  value={category.value}
                  className="p-2 cursor-pointer hover:bg-secondary-100 rounded-sm"
                >
                  {category.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Container>
    </Section>
  );
};
