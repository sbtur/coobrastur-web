// import Button from '@workspace/ui/components/Button';
// import Heading from '@workspace/ui/components/Heading/Heading';
import { Text, Heading, Title } from '@workspace/ui/components';

export default function Page() {
  return (
    <div className='flex items-center justify-center min-h-svh'>
      <div className='flex flex-col items-center justify-center gap-4'>
        {/* <Heading.Root>
          <Heading.Title>The Great Page</Heading.Title>
          <Heading.Text className='font-bold text-blue-400'>
            Description of the heading
          </Heading.Text>
        </Heading.Root> */}
        <Title color='primary'>Titulo da seção</Title>
        <Text as='label' className='text-2xl font-bold text-red-400'>
          Texto de descrição
        </Text>
      </div>
    </div>
  );
}
