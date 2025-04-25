import { Card, CardHeader } from '@coobrastur/ui/components/data-display/card';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';

import { TRAVEL_AGENCY } from '../../helpers/travel-agency';

export const SectionAgencyDesktop = () => {
  return (
    <div className="lg:2/3 xl:w-3/4 hidden lg:grid grid-cols-3 gap-4 mt-8 2xl:gap-4 mx-auto">
      {TRAVEL_AGENCY.map(travelAgency => (
        <Card key={travelAgency.title}>
          <CardHeader>
            <Title size="xs">{travelAgency.title}</Title>
            <Text size="sm">{travelAgency.description}</Text>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};
