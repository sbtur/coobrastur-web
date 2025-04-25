import { Card } from '../card/card';
import { TRAVEL_AGENCY } from '../../helpers/travel-agency';

export const SectionAgencyDesktop = () => {
  const [travelAgency1, travelAgency2, travelAgency3] = TRAVEL_AGENCY;

  if (!travelAgency1 || !travelAgency2 || !travelAgency3) {
    return [];
  }

  return (
    <div className="lg:2/3 xl:w-3/4 hidden lg:grid grid-cols-3 gap-4 mt-8 2xl:gap-4 mx-auto">
        <Card travelAgency={travelAgency1} />
        <Card travelAgency={travelAgency2} />
        <Card travelAgency={travelAgency3} />
    </div>
  );
};