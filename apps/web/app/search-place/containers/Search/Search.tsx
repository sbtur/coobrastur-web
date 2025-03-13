import { MapPin, Search as SearchIcon } from 'lucide-react';

import { Icon } from '@ui/components/DataDisplay/Icon';
import { Text } from '@ui/components/DataDisplay/Text';
import { Button } from '@ui/components/DataEntry/Button';
import { Container } from '@ui/components/Layouts/Container';

export const Search = () => {
  return (
    <Container as="section" padding="lg" className="bg-background">
      <Container
        size="xl"
        className="flex flex-col items-center justify-center "
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-background rounded-[10px] p-2 md:p-4 shadow-lg">
            <div className="w-[280px] md:w-[380px] pl-4 md:pl-14">
              <Text className="leading-none">Cidade ou Hotel:</Text>
              <div className="flex items-center gap-1">
                <Icon size="lg" icon={MapPin} variant="primary" />
                <input
                  type="text"
                  placeholder="Digite o nome da cidade ou hotel"
                  className="w-full p-2 pl-0 text-sm font-semibold text-primary-300 placeholder:text-primary-300 focus:outline-none"
                />
              </div>
            </div>
            <Button className="py-6 rounded-[10px]">
              <Icon icon={SearchIcon} variant="white" />
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
};
