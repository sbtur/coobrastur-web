'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { Badge } from '@coobrastur/ui/components/data-display/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@coobrastur/ui/components/data-display/card';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@coobrastur/ui/components/data-entry/form';
import { Label } from '@coobrastur/ui/components/data-entry/label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@coobrastur/ui/components/data-entry/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@coobrastur/ui/components/data-entry/select';
import { useForm } from '@coobrastur/ui/lib/form';
import { ArrowRight, Check } from '@coobrastur/ui/lib/icons';
import { cn } from '@coobrastur/ui/lib/utils';

import {
  DAILIES_OPTIONS,
  PLANS_CATEGORIES,
  PLANS_OPTIONS,
} from './utils/plans-categories';

const DialogForm = dynamic(
  () => import('./components/dialog-form').then(mod => mod.DialogForm),
  {
    ssr: false,
  },
);

export const PlanCards = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState('');

  const form = useForm({
    defaultValues: {
      category: '',
      plan: '',
      dailies: '',
    },
  });

  const { control } = form;

  const handleSelectCategory = (category: string) => {
    setCategorySelected(category);
    form.setValue('category', category);
    const firstPlan = PLANS_OPTIONS[0]?.value;
    if (firstPlan) {
      form.setValue('plan', `${firstPlan}-${category}`);
    }
  };
  return (
    <>
      <DialogForm
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <Form
        form={form}
        onSubmit={e => {
          e.preventDefault();
        }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 lg:px-0 max-w-[1200px] lg:mx-auto mt-10"
      >
        {PLANS_CATEGORIES.map(category => {
          const isCategoryDisabledSelected =
            categorySelected !== category.value;

          return (
            <Card className="lg:max-w-[370px] bg-white" key={category.id}>
              <CardHeader className="px-10 relative">
                <button
                  type="button"
                  onClick={() => handleSelectCategory(category.value)}
                  className={`absolute top-6 right-6 w-9 h-9 rounded-full bg-transparent border border-input flex items-center justify-center hover:bg-highlight-300 group
                  ${!isCategoryDisabledSelected && 'bg-highlight-300'}
                  `}
                >
                  <Icon
                    icon={Check}
                    variant="white"
                    className={`w-7 h-7 opacity-0 group-hover:opacity-100 ${
                      !isCategoryDisabledSelected && 'opacity-100'
                    }`}
                  />
                </button>

                <Badge
                  className={`${category.backgroundColor} ${category.foregroundColor}`}
                >
                  {category.name}
                </Badge>
                <CardTitle className="text-2xl text-primary-300 font-primary">
                  Categoria {category.name}
                </CardTitle>
                <Text
                  dangerouslySetInnerHTML={{ __html: category.description }}
                />
              </CardHeader>

              <CardContent className="space-y-6">
                <FormField
                  control={control}
                  name="plan"
                  render={({ field }) => (
                    <FormItem>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="space-y-2"
                      >
                        {PLANS_OPTIONS.map(plan => {
                          return (
                            <Label
                              key={plan.id}
                              htmlFor={`${plan.value}-${category.value}`}
                              className={cn(
                                'flex items-center rounded-[10px] border-2 p-4 font-normal',
                                isCategoryDisabledSelected
                                  ? 'cursor-not-allowed border-input'
                                  : 'cursor-pointer hover:border-highlight',
                                `${plan.value}-${category.value}` ===
                                  field.value && 'border-highlight',
                              )}
                            >
                              <RadioGroupItem
                                value={`${plan.value}-${category.value}`}
                                id={`${plan.value}-${category.value}`}
                                className="w-6 h-6 mr-4 hover:bg-transparent"
                                disabled={isCategoryDisabledSelected}
                              />
                              <div>
                                <div className="text-primary-300 font-bold font-primary">
                                  {plan.name}
                                </div>
                                <div className="text-sm text-text-body">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: plan.description,
                                    }}
                                  />
                                </div>
                              </div>
                            </Label>
                          );
                        })}
                      </RadioGroup>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dailies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-300 font-bold font-primary">
                        Número de diárias:
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={isCategoryDisabledSelected}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o número de diárias..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {DAILIES_OPTIONS.map(day => (
                            <SelectItem key={day.id} value={day.value}>
                              {day.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary-300 font-primary">
                      223,90
                    </span>
                    <span className="text-text-body ml-1">/ Por mês</span>
                  </div>

                  <Button
                    className="w-full rounded-[10px]"
                    size="lg"
                    disabled={isCategoryDisabledSelected}
                    onClick={() => setIsDialogOpen(true)}
                  >
                    Assine agora <Icon icon={ArrowRight} variant="white" />
                  </Button>

                  <a
                    href="https://wa.me/"
                    className="block text-center text-sm text-text-body hover:text-gray-700 underline"
                  >
                    Fale com um consultor no WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </Form>
    </>
  );
};
