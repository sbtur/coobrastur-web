import { ChevronDown, X } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@coobrastur/ui/components/data-display/accordion';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@coobrastur/ui/components/data-display/dialog';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Separator } from '@coobrastur/ui/components/data-display/separator';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Checkbox } from '@coobrastur/ui/components/data-entry/checkbox';
import { Label } from '@coobrastur/ui/components/data-entry/label';

import { ADDITIONAL_VALUE_FILTERS } from '../../helpers/additional-value-filters';
import { CATEGORIES_FILTERS } from '../../helpers/categories-filters';
import { STYLE_FILTERS } from '../../helpers/style-filters';
import { FilterContent } from './filter-content';
import { FilterTitle } from './filter-title';

export const FiltersMobile = () => {
  return (
    <aside className="w-full lg:w-[315px]">
      <Dialog>
        <DialogTrigger asChild>
          <button className="w-full flex items-center justify-center text-left gap-1 font-primary text-base text-primary-300 font-bold p-4 border border-neutral-300 rounded-md mb-4">
            <span>Filtros</span>
            <Icon icon={ChevronDown} className="w-4 h-4 text-neutral-400" />
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogClose className="absolute top-4 right-4 z-10">
            <Icon icon={X} className="h-8 w-8 text-neutral-500" />
          </DialogClose>
          <div className="bg-white w-full">
            <DialogHeader>
              <DialogTitle className="font-primary text-primary-300 text-[28px] mb-2 text-left font-bold">
                Filtros
              </DialogTitle>
            </DialogHeader>

            <Separator />

            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <FilterTitle>Categoria</FilterTitle>
                </AccordionTrigger>
                <AccordionContent>
                  <FilterContent>
                    {CATEGORIES_FILTERS.map(filter => (
                      <Label
                        key={filter.value}
                        htmlFor={filter.value}
                        className="flex items-center gap-2"
                      >
                        <Checkbox id={filter.value} />
                        {filter.name}
                      </Label>
                    ))}
                  </FilterContent>
                </AccordionContent>
              </AccordionItem>

              <Separator />

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <FilterTitle>Serviços</FilterTitle>
                </AccordionTrigger>
                <AccordionContent>
                  {CATEGORIES_FILTERS.map(filter => (
                    <Label
                      key={filter.value}
                      htmlFor={filter.value}
                      className="flex items-center gap-2"
                    >
                      <Checkbox id={filter.value} />
                      {filter.name}
                    </Label>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <Separator />

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <FilterTitle>Valor Adicional</FilterTitle>
                </AccordionTrigger>
                <AccordionContent>
                  {ADDITIONAL_VALUE_FILTERS.map(filter => (
                    <Label
                      key={filter.value}
                      htmlFor={filter.value}
                      className="flex items-center gap-2"
                    >
                      <Checkbox id={filter.value} />
                      {filter.name}
                    </Label>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <Separator />

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <FilterTitle>Busca por Bairro</FilterTitle>
                </AccordionTrigger>
                <AccordionContent>
                  {STYLE_FILTERS.map(filter => (
                    <Label
                      key={filter.value}
                      htmlFor={filter.value}
                      className="flex items-center gap-2"
                    >
                      <Checkbox id={filter.value} />
                      {filter.name}
                    </Label>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <Separator />

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <FilterTitle>Busca por Estilo</FilterTitle>
                </AccordionTrigger>
                <AccordionContent>
                  {STYLE_FILTERS.map(filter => (
                    <Label
                      key={filter.value}
                      htmlFor={filter.value}
                      className="flex items-center gap-2"
                    >
                      <Checkbox id={filter.value} />
                      {filter.name}
                    </Label>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <Separator />
            </Accordion>

            <Button className="w-full mt-6">Aplicar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </aside>
  );
};
