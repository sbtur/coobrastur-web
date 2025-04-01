import { Suspense } from 'react';

import Accommodation from './accommodation';

export default function AccommodationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Accommodation />
    </Suspense>
  );
}
