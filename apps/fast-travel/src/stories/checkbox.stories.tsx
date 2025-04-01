import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui/components/data-entry/button';
import { Checkbox, CheckboxWrapper } from '@ui/components/data-entry/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/components/data-entry/form';
import { Label } from '@ui/components/data-entry/label';
import { useForm } from '@ui/lib/form';
import { v, zodResolver } from '@ui/lib/validation';

const meta = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CheckboxWrapper>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </CheckboxWrapper>
  ),
};

export const Checked: Story = {
  render: () => (
    <CheckboxWrapper>
      <Checkbox id="terms-checked" checked />
      <Label htmlFor="terms-checked">Accept terms and conditions</Label>
    </CheckboxWrapper>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <CheckboxWrapper>
        <Checkbox id="unchecked" />
        <Label htmlFor="unchecked">Unchecked</Label>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox id="checked" checked />
        <Label htmlFor="checked">Checked</Label>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled</Label>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox id="disabled-checked" disabled checked />
        <Label htmlFor="disabled-checked">Disabled & Checked</Label>
      </CheckboxWrapper>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <CheckboxWrapper>
      <Checkbox id="terms" disabled />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </CheckboxWrapper>
  ),
};

const FormExample = () => {
  const form = useForm({
    defaultValues: {
      marketing: false,
      terms: false,
    },
    resolver: zodResolver(
      v.object({
        marketing: v.boolean(),
        terms: v.boolean().refine(val => val, {
          message: 'You must accept the terms and conditions',
        }),
      }),
    ),
  });

  return (
    <Form form={form} onSubmit={form.handleSubmit(console.log)}>
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

export const WithForm: Story = {
  render: () => <FormExample />,
};
