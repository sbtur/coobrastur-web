import { CATEGORY } from '../../helpers/category';
import { FILTERS } from '../../helpers/filters';

import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/DataDisplay/Caroussel';
import { Icon } from '@ui/components/DataDisplay/Icon';
import { Text } from '@ui/components/DataDisplay/Text';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@ui/components/dropdown-menu';
import { Container } from '@ui/components/Layouts/Container';
import { ChevronDown, Hotel } from '@ui/lib/icons';

export const SearchFilters = () => {
  return (
    <Container padding="md" className="bg-background lg:shadow-lg lg:mb-8">
      <Container
        size="lg"
        className="px-0 lg:px-8 lg:flex items-center justify-between"
      >
        <Text className="hidden lg:block">
          Hotéis em <br />
          <span className="font-primary text-primary-300 text-2xl font-bold">
            Florianópolis
          </span>
        </Text>
        <div className="bg-background shadow-lg mb-8 lg:mb-0 pb-6 lg:pb-0 lg:shadow-none">
          <Carousel className="h-full" opts={{ loop: true }}>
            <CarouselContent className="h-full">
              {FILTERS.map(filter => (
                <CarouselItem
                  key={filter.value}
                  className="flex-[0_0_25%] lg:flex-[0_0_16%] flex items-center justify-center"
                >
                  <button key={filter.value} className="group">
                    <Text className="group-hover:text-highlight flex flex-col gap-1 items-center justify-center">
                      <Icon
                        icon={filter.icon}
                        className="group-hover:text-highlight"
                      />
                      {filter.label}
                    </Text>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>
        <div className="w-fit mx-auto lg:mx-0 border border-border rounded-md p-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
              <Icon icon={Hotel} variant="primary" />
              Categoria do Hotel
              <Icon icon={ChevronDown} variant="primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background rounded-lg w-[260px]">
              <DropdownMenuLabel className="font-semibold border-b border-border mb-1 gap-2">
                Selecione a Categoria
              </DropdownMenuLabel>
              {CATEGORY.map(category => (
                <DropdownMenuItem
                  key={category.value}
                  className="p2 cursor-pointer hover:bg-secondary-100 rounded-sm"
                >
                  {category.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </Container>
  );
};
