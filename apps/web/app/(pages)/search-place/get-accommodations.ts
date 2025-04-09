import { ACCOMMODATIONSDETAILS } from '@/shared/mocks/accommodations/accommodations-details';

export async function getAccommodations() {
  await new Promise(resolve => setTimeout(resolve, 5000));

  return ACCOMMODATIONSDETAILS;
}
