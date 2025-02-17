import {
  Container,
  Menu,
  Wrapper,
  Icon,
  Button,
} from '@workspace/ui/components';
import { MdKeyboardArrowDown, MdArrowRightAlt } from '@workspace/ui/lib/icons';

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <div className='logo'>
          <img
            src='https://placehold.co/245x40/transparent/FFFFFF?text=grupocoobrastur'
            alt='Logo'
            width={245}
            height={40}
            className='rounded'
          />
        </div>
        <Menu.Root>
          <Menu.List>
            <Menu.Item>
              <Menu.Trigger>O Clube</Menu.Trigger>
              <Menu.Content>
                <Menu.List className='grid w-[300px] gap-3 py-4 px-2 md:w-[400px] lg:grid-cols-2 lg:w-[500px]'>
                  <Menu.Item>
                    <Menu.Link className='block select-none space-y-1 rounded p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                      <div className='text-primary leading-none'>Sobre Nós</div>
                      <p className='line-clamp-2 text-sm leading-snug text-gray-400'>
                        Conheça a empresa
                      </p>
                    </Menu.Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Menu.Link className='block select-none space-y-1 rounded p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                      <div className='text-primary leading-none'>Planos</div>
                      <p className='line-clamp-2 text-sm leading-snug text-gray-400'>
                        Conheça os planos
                      </p>
                    </Menu.Link>
                  </Menu.Item>
                </Menu.List>
              </Menu.Content>
            </Menu.Item>
            <Menu.Item>
              <Menu.Link href='#'>Planos</Menu.Link>
            </Menu.Item>
            <Menu.Item>
              <Menu.Link href='#'>Agência de Viagens</Menu.Link>
            </Menu.Item>
            <Menu.Item>
              <Menu.Link href='#'>Destinos</Menu.Link>
            </Menu.Item>
            <Menu.Item>
              <Menu.Link href='#'>Hotéis</Menu.Link>
            </Menu.Item>
          </Menu.List>
        </Menu.Root>
        <div className='space-x-4'>
          <Button variant='outline-overlay'>
            Acessos <Icon icon={MdKeyboardArrowDown} color='white' />
          </Button>
          <Button variant='overlay'>
            Simule sua assinatura <Icon icon={MdArrowRightAlt} />
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
};
