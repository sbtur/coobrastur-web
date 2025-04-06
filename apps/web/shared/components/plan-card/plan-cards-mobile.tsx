'use client';

import { Badge } from '@coobrastur/ui/components/data-display/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@coobrastur/ui/components/data-display/card';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@coobrastur/ui/components/data-display/tabs';
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
import { Controller, useForm } from '@coobrastur/ui/lib/form';
import { ArrowRight } from '@coobrastur/ui/lib/icons';
import { cn } from '@coobrastur/ui/lib/utils';

import {
  DAILIES_OPTIONS,
  PLANS_CATEGORIES,
  PLANS_OPTIONS,
} from './utils/plans-categories';

export const PlanCardsMobile = () => {
  const form = useForm({
    defaultValues: {
      category: '',
      plan: '',
      dailies: '',
    },
  });

  const { control } = form;
  const selectedCategory = form.watch('category');

  return (
    <Form
      form={form}
      onSubmit={e => {
        e.preventDefault();
        console.log(form.getValues());
      }}
      className="px-4 mt-10"
    >
      <Tabs defaultValue="Silver" className="grid gap-1 p-0">
        <TabsList className="h-fit justify-between">
          {PLANS_CATEGORIES.map(category => (
            <TabsTrigger
              value={category.value}
              key={category.id}
              className="border border-input rounded-md p-0 text-left bg-primary text-white relative"
            >
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={value => {
                      field.onChange(value);
                      const firstPlan = PLANS_OPTIONS[0]?.value;
                      if (firstPlan) {
                        form.setValue('plan', `${firstPlan}-${value}`);
                      }
                    }}
                  >
                    <Label
                      htmlFor={category.value}
                      className="text-xs uppercase h-[75px] w-full px-4 pr-8 flex flex-col justify-center"
                    >
                      Categoria <br />
                      <strong>{category.name}</strong>
                      <RadioGroupItem
                        value={category.value}
                        id={category.value}
                        className="w-4 h-4 absolute top-2 right-2"
                      />
                    </Label>
                  </RadioGroup>
                )}
              />
            </TabsTrigger>
          ))}
        </TabsList>
        {PLANS_CATEGORIES.map(category => (
          <TabsContent value={category.value} key={category.id} className="m-0">
            <Card className="lg:max-w-[370px] bg-white" key={category.id}>
              <CardHeader className="px-10 relative">
                <Badge
                  className={`${category.backgroundColor} ${category.foregroundColor}`}
                >
                  {category.name}
                </Badge>
                <CardTitle className="text-2xl text-primary font-primary">
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
                          const isSelectionDisabled =
                            selectedCategory !== category.value;
                          return (
                            <Label
                              key={plan.id}
                              htmlFor={`${plan.value}-${category.value}`}
                              className={cn(
                                'flex items-center rounded-[10px] border-2 p-4',
                                isSelectionDisabled
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
                                disabled={isSelectionDisabled}
                              />
                              <div>
                                <div className="text-base font-bold font-primary">
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
                      <FormLabel className="text-primary font-bold font-primary">
                        Número de diárias:
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={selectedCategory !== category.value}
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
                    <span className="text-4xl font-bold text-navy-800">
                      223,90
                    </span>
                    <span className="text-gray-600 ml-1">/ Por mês</span>
                  </div>

                  <Button
                    className="w-full rounded-[10px]"
                    size="lg"
                    disabled={selectedCategory !== category.value}
                  >
                    Assine agora <Icon icon={ArrowRight} variant="white" />
                  </Button>

                  <a
                    href="https://wa.me/"
                    className="block text-center text-sm text-gray-500 hover:text-gray-700 underline"
                  >
                    Fale com um consultor no WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </Form>
  );
};
