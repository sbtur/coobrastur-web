import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '@workspace/ui/components';

const meta = {
  title: 'Navigation/Menu',
  component: Menu.Root,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'primary',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Menu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '',
  },
  render: () => (
    <Menu.Root>
      <Menu.List>
        <Menu.Item>
          <Menu.Trigger>Getting started</Menu.Trigger>
          <Menu.Content>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <Menu.Item asChild>
                  <a
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/'
                  >
                    <div className='mb-2 mt-4 text-lg font-medium'>
                      shadcn/ui
                    </div>
                    <p className='text-sm leading-tight text-muted-foreground'>
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </Menu.Item>
              </li>
              <Menu.Item>
                Re-usable components built using Radix UI and Tailwind CSS.
              </Menu.Item>
              <Menu.Item>
                How to install dependencies and structure your app.
              </Menu.Item>
              <Menu.Item>
                Styles for headings, paragraphs, lists...etc
              </Menu.Item>
            </ul>
          </Menu.Content>
        </Menu.Item>
        <Menu.Item>
          <a href='/docs'>
            <Menu.Link>Documentation</Menu.Link>
          </a>
        </Menu.Item>
      </Menu.List>
    </Menu.Root>
  ),
};
