import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Section } from '@coobrastur/ui/components/layouts/section';

import { CATEGORIES_PLANS } from './utils/categories-plans';

import CategoryIcon from '@images/icons/coobrastur-logo.svg';
import { Container } from '@ui/components/layouts/container';

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
              <span
                className={`text-sm font-bold hidden lg:inline-block ${category.foregroundColor}`}
              >
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
