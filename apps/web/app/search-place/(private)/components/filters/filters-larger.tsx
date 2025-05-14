import { Separator } from '@coobrastur/ui/components/data-display/separator/separator';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Checkbox } from '@coobrastur/ui/components/data-entry/checkbox';
import { Label } from '@coobrastur/ui/components/data-entry/label';

import { ADDITIONAL_VALUE_FILTERS } from '../../helpers/additional-value-filters';
import { CATEGORIES_FILTERS } from '../../helpers/categories-filters';
import { STYLE_FILTERS } from '../../helpers/style-filters';
import { FilterContent } from './filter-content';
import { FilterTitle } from './filter-title';

export const FiltersLarger = () => {
  return (
    <aside className="w-full grid gap-6 lg:w-[315px] border border-neutral-300 rounded-[10px] p-6">
      <div>
        <Title className="font-primary text-primary-300 text-[28px] mb-2 text-left font-bold">
          Filtros
        </Title>

        <Separator />
      </div>

      <FilterTitle>Categoria</FilterTitle>
      <FilterContent>
        {CATEGORIES_FILTERS.map(filter => (
          <Label
            htmlFor={filter.value}
            key={filter.value}
            className="flex items-center gap-2"
          >
            <Checkbox id={filter.value} />
            {filter.name}
          </Label>
        ))}
      </FilterContent>

      <Separator />

      <FilterTitle>Serviços</FilterTitle>
      <FilterContent>
        {CATEGORIES_FILTERS.map(filter => (
          <Label
            htmlFor={filter.value}
            key={filter.value}
            className="flex items-center gap-2"
          >
            <Checkbox id={filter.value} />
            {filter.name}
          </Label>
        ))}
      </FilterContent>

      <Separator />

      <FilterTitle>Valor Adicional</FilterTitle>
      <FilterContent>
        {ADDITIONAL_VALUE_FILTERS.map(filter => (
          <Label
            htmlFor={filter.value}
            key={filter.value}
            className="flex items-center gap-2"
          >
            <Checkbox id={filter.value} />
            {filter.name}
          </Label>
        ))}
      </FilterContent>

      <Separator />

      <FilterTitle>Busca por Bairro</FilterTitle>
      <FilterContent>
        {STYLE_FILTERS.map(filter => (
          <Label
            htmlFor={filter.value}
            key={filter.value}
            className="flex items-center gap-2"
          >
            <Checkbox id={filter.value} />
            {filter.name}
          </Label>
        ))}
      </FilterContent>

      <Separator />

      <FilterTitle>Busca por Estilo</FilterTitle>
      <FilterContent>
        {STYLE_FILTERS.map(filter => (
          <Label
            htmlFor={filter.value}
            key={filter.value}
            className="flex items-center gap-2"
          >
            <Checkbox id={filter.value} />
            {filter.name}
          </Label>
        ))}
      </FilterContent>
    </aside>
  );
};
