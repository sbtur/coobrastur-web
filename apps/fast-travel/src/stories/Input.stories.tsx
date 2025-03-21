import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@ui/components/DataDisplay/Icon';
import { Button } from '@ui/components/DataEntry/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/components/DataEntry/Form';
import { Input, InputIcon } from '@ui/components/DataEntry/Input';
import { useForm } from '@ui/lib/form';
import { Lock, Mail, Search } from '@ui/lib/icons';
import { v, zodResolver } from '@ui/lib/validation';

const meta = {
  title: 'Data Entry/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Input placeholder="Type something..." />,
};

export const WithTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <Input type="text" placeholder="Text" />
      <Input type="password" placeholder="Password" />
      <Input type="email" placeholder="Email" />
      <Input type="number" placeholder="Number" />
      <Input type="tel" placeholder="Phone" />
      <Input type="url" placeholder="URL" />
      <Input type="search" placeholder="Search" />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="relative">
        <InputIcon>
          <Icon icon={Search} variant="primary" />
        </InputIcon>
        <Input className="pl-9" type="search" placeholder="Search..." />
      </div>
      <div className="relative">
        <InputIcon>
          <Icon icon={Mail} variant="primary" />
        </InputIcon>
        <Input className="pl-9" type="email" placeholder="Email" />
      </div>
      <div className="relative">
        <InputIcon>
          <Icon icon={Lock} variant="primary" />
        </InputIcon>
        <Input className="pl-9" type="password" placeholder="Password" />
      </div>
    </div>
  ),
};

const FormExample = () => {
  const form = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(
      v.object({
        email: v.string().email('Invalid email format'),
      }),
    ),
  });

  return (
    <Form form={form} onSubmit={form.handleSubmit(console.log)}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Email" type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export const WithForm: Story = {
  render: () => <FormExample />,
};
