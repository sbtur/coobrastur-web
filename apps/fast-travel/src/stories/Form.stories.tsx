import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui/components/DataEntry/Button';
import { Checkbox, CheckboxWrapper } from '@ui/components/DataEntry/Checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/components/DataEntry/Form';
import { Input } from '@ui/components/DataEntry/Input';
import { useForm } from '@ui/lib/form';
import { v, zodResolver } from '@ui/lib/validation';

const schema = v.object({
  name: v.string().min(1),
  email: v.string().email('Email is required'),
  marketing: v.boolean(),
  terms: v.boolean().refine(val => val, {
    message: 'You must accept the terms and conditions',
  }),
});

const FormDefault = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      terms: false,
      marketing: false,
    },
    resolver: zodResolver(schema),
  });

  return (
    <Form
      form={form}
      onSubmit={form.handleSubmit(values => {
        console.log(values);
      })}
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <Input {...field} />
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" {...field} />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="terms"
        render={({ field }) => (
          <FormItem>
            <CheckboxWrapper>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Accept terms and conditions</FormLabel>
                <FormMessage />
              </div>
            </CheckboxWrapper>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="marketing"
        render={({ field }) => (
          <FormItem>
            <CheckboxWrapper>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Receive marketing emails</FormLabel>
                <FormMessage />
              </div>
            </CheckboxWrapper>
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const meta = {
  title: 'Data Entry/Form',
  component: FormDefault,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <FormDefault />,
};
