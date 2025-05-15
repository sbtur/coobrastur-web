'use client';

import { Controller } from 'react-hook-form';

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
import { Form } from '@coobrastur/ui/components/data-entry/form';
import { Label } from '@coobrastur/ui/components/data-entry/label';

import { ADDITIONAL_VALUE_FILTERS } from '../../helpers/additional-value-filters';
import { CATEGORIES_FILTERS } from '../../helpers/categories-filters';
import { STYLE_FILTERS } from '../../helpers/style-filters';
import { FilterContent } from './filter-content';
import { FilterTitle } from './filter-title';
import { useFilters } from './use-filters';

export const FiltersMobile = () => {
  const {
    form,
    handleSubmitFilterSearch,
    openFilterDialogContent,
    setOpenFilterDialogContent,
    filtersInitialSelected,
  } = useFilters();

  return (
    <aside className="w-full lg:w-[315px]">
      <Dialog
        open={openFilterDialogContent}
        onOpenChange={setOpenFilterDialogContent}
      >
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
          <Form
            onSubmit={form.handleSubmit(handleSubmitFilterSearch)}
            form={form}
          >
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
                      <Controller
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <>
                            {CATEGORIES_FILTERS.map(filter => (
                              <Label
                                key={filter.value}
                                htmlFor={filter.value}
                                className="flex items-center gap-2"
                              >
                                <Checkbox
                                  id={filter.value}
                                  checked={filtersInitialSelected.category?.includes(
                                    filter.value
                                  )}
                                  onCheckedChange={checked => {
                                    if (checked) {
                                      field.onChange([
                                        ...(field.value || []),
                                        filter.value,
                                      ]);
                                    } else {
                                      field.onChange(
                                        (field.value || []).filter(
                                          v => v !== filter.value
                                        )
                                      );
                                    }
                                  }}
                                />
                                {filter.name}
                              </Label>
                            ))}
                          </>
                        )}
                      />
                    </FilterContent>
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <FilterTitle>Serviços</FilterTitle>
                  </AccordionTrigger>
                  <AccordionContent>
                    <FilterContent>
                      <Controller
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <>
                            {CATEGORIES_FILTERS.map(filter => (
                              <Label
                                key={filter.value}
                                htmlFor={filter.value}
                                className="flex items-center gap-2"
                              >
                                <Checkbox
                                  id={filter.value}
                                  checked={field.value?.includes(filter.value)}
                                  onCheckedChange={checked => {
                                    if (checked) {
                                      field.onChange([
                                        ...(field.value || []),
                                        filter.value,
                                      ]);
                                    } else {
                                      field.onChange(
                                        (field.value || []).filter(
                                          v => v !== filter.value
                                        )
                                      );
                                    }
                                  }}
                                />
                                {filter.name}
                              </Label>
                            ))}
                          </>
                        )}
                      />
                    </FilterContent>
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <FilterTitle>Valor Adicional</FilterTitle>
                  </AccordionTrigger>
                  <AccordionContent>
                    <FilterContent>
                      <Controller
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <>
                            {ADDITIONAL_VALUE_FILTERS.map(filter => (
                              <Label
                                key={filter.value}
                                htmlFor={filter.value}
                                className="flex items-center gap-2"
                              >
                                <Checkbox
                                  id={filter.value}
                                  checked={filtersInitialSelected.extra?.includes(
                                    filter.value
                                  )}
                                  onCheckedChange={checked => {
                                    if (checked) {
                                      field.onChange([
                                        ...(field.value || []),
                                        filter.value,
                                      ]);
                                    } else {
                                      field.onChange(
                                        (field.value || []).filter(
                                          v => v !== filter.value
                                        )
                                      );
                                    }
                                  }}
                                />
                                {filter.name}
                              </Label>
                            ))}
                          </>
                        )}
                      />
                    </FilterContent>
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <FilterTitle>Busca por Bairro</FilterTitle>
                  </AccordionTrigger>
                  <AccordionContent>
                    <FilterContent>
                      <Controller
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <>
                            {CATEGORIES_FILTERS.map(filter => (
                              <Label
                                key={filter.value}
                                htmlFor={filter.value}
                                className="flex items-center gap-2"
                              >
                                <Checkbox
                                  id={filter.value}
                                  checked={filtersInitialSelected.neighborhood?.includes(
                                    filter.value
                                  )}
                                  onCheckedChange={checked => {
                                    if (checked) {
                                      field.onChange([
                                        ...(field.value || []),
                                        filter.value,
                                      ]);
                                    } else {
                                      field.onChange(
                                        (field.value || []).filter(
                                          v => v !== filter.value
                                        )
                                      );
                                    }
                                  }}
                                />
                                {filter.name}
                              </Label>
                            ))}
                          </>
                        )}
                      />
                    </FilterContent>
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    <FilterTitle>Busca por Estilo</FilterTitle>
                  </AccordionTrigger>
                  <AccordionContent>
                    <FilterContent>
                      <Controller
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <>
                            {STYLE_FILTERS.map(filter => (
                              <Label
                                key={filter.value}
                                htmlFor={filter.value}
                                className="flex items-center gap-2"
                              >
                                <Checkbox
                                  id={filter.value}
                                  checked={filtersInitialSelected.destination?.includes(
                                    filter.value
                                  )}
                                  onCheckedChange={checked => {
                                    if (checked) {
                                      field.onChange([
                                        ...(field.value || []),
                                        filter.value,
                                      ]);
                                    } else {
                                      field.onChange(
                                        (field.value || []).filter(
                                          v => v !== filter.value
                                        )
                                      );
                                    }
                                  }}
                                />
                                {filter.name}
                              </Label>
                            ))}
                          </>
                        )}
                      />
                    </FilterContent>
                  </AccordionContent>
                </AccordionItem>

                <Separator />
              </Accordion>

              <Button className="w-full mt-6">Aplicar</Button>
            </div>
          </Form>
        </DialogContent>
      </Dialog>
    </aside>
  );
};
