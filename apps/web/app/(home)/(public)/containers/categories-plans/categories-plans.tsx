import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Section } from '@coobrastur/ui/components/layouts/section';

import CategoryIcon from '@images/icons/coobrastur-logo.svg';
import { Container } from '@ui/components/layouts/container';

const CATEGORIES_PLANS = [
  {
    foregroundColor: 'text-[#6B7780]',
    backgroundColor: 'bg-[#F2F4F5]',
    name: 'Silver',
    description:
      'Aproveite hotéis Executivos para uma viagem incrível e com muito economia.',
  },
  {
    foregroundColor: 'text-[#D4A72C]',
    backgroundColor: 'bg-[#FFFACD]',
    name: 'Gold',
    description:
      'Hospedagens de categoria Superior para experiências de viagem ainda mais confortável.',
  },
  {
    foregroundColor: 'text-[#2E6299]',
    backgroundColor: 'bg-[#E2F2FF]',
    name: 'Diamante',
    description:
      'Hotéis e resorts de luxo no Brasil e no exterior para experiências inesquecíveis.',
  },
];

export const CategoriesPlans = () => {
  return (
    <Section as="section" className="p-0 lg:py-14">
      <Container className="p-0 grid lg:grid-cols-3">
        {CATEGORIES_PLANS.map(category => (
          <div
            key={category.name}
            className={`h-[250px] lg:h-auto flex flex-col lg:flex-row gap-2 lg:gap-4 content-center text-center items-center justify-center lg:text-left lg:place-items-start lg:content-start ${category.backgroundColor} lg:bg-transparent`}
          >
            <div
              className={`lg:h-[95px] lg:w-[110px] lg:rounded-md lg:flex lg:justify-center lg:items-center relative ${category.backgroundColor}`}
            >
              <div
                className={`h-10 w-10 bg-white rounded-full flex justify-center items-center content-center lg:absolute lg:-left-6`}
              >
                <CategoryIcon
                  className={`${category.foregroundColor} hover:scale-105 transition-all duration-300`}
                />
              </div>
              <span className="text-sm font-bold hidden lg:inline-block">
                {category.name}
              </span>
            </div>
            <div>
              <Title className={category.foregroundColor}>
                {category.name}
              </Title>
              <Text size="base" className="w-[260px]">
                {category.description}
              </Text>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
};
