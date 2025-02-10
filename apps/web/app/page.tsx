// import Button from '@workspace/ui/components/Button';
// import Heading from '@workspace/ui/components/Heading/Heading';
import { Text, Heading, Title, Menu } from '@workspace/ui/components';
// import { NavigationMenuDemo } from './navigation';

export default function Page() {
  return (
    <div className='flex items-center justify-center min-h-svh'>
      <div className='flex flex-col items-center justify-center gap-4'>
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
        <Title>Titulo da seção</Title>
        <Text as='label' className='text-2xl font-bold text-red-400'>
          Texto de descrição
        </Text>
      </div>
    </div>
  );
}
