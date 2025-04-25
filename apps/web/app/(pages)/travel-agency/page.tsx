import { Form } from './containers/form/form';
import { SectionAgency } from './containers/section-agency/section-agency';
import { SectionProduct } from './containers/section-product/section-product';

export default async function TravelAgency() {
  return (
    <>
      <SectionAgency />
      <SectionProduct />
      <Form />
    </>
  );
}
