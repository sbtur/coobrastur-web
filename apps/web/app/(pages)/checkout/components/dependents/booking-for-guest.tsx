import { useForm } from 'react-hook-form';

import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from '@coobrastur/ui/components/data-entry/form';
import {
  RadioGroup,
  RadioGroupItem,
} from '@coobrastur/ui/components/data-entry/radio-group';

export function BookingForGuest() {
  const form = useForm({
    defaultValues: {
      guestType: '1_guest',
    },
  });

  const onValueChange = (value: string) => {
    form.setValue('guestType', value);
    form.handleSubmit(handleSubmit)();
  };

  const handleSubmit = (data: { guestType: string }) => {
    console.log(data);
  };

  return (
    <div>
      <Title>Estou reservando para outra pessoa</Title>
      <Text className="text-neutral-500 font-normal mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Text>

      <Form
        form={form}
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-1"
      >
        <FormField
          control={form.control}
          name="guestType"
          render={({ field }) => (
            <FormItem>
              <RadioGroup
                onValueChange={onValueChange}
                defaultValue={field.value}
                className="flex flex-row gap-8 pb-8"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1_guest" id="1_guest" />
                  <FormLabel
                    htmlFor="1_guest"
                    className={`text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center min-w-[180px] ${
                      field.value === '1_guest'
                        ? 'font-semibold'
                        : 'font-normal'
                    }`}
                  >
                    Parente de primeiro grau
                  </FormLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3_guest" id="3_guest" />
                  <FormLabel
                    htmlFor="3_guest"
                    className={`text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center min-w-[180px] ${
                      field.value === '3_guest'
                        ? 'font-semibold'
                        : 'font-normal'
                    }`}
                  >
                    Parente de terceiro grau
                  </FormLabel>
                </div>
              </RadioGroup>
            </FormItem>
          )}
        />
        <Text
          size="base"
          spacing="sm"
          className="text-primary-300 font-semibold"
        >
          Você não possui terceiros cadastrados
        </Text>
        <Text size="sm" spacing="sm" className="mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </Text>
      </Form>
    </div>
  );
}
