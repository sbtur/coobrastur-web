import { GuestCard } from './guest-card';
import { GuestProvider } from './guest-provider';

export const GuestSelect = () => {
  return (
    <GuestProvider>
      <GuestCard />
    </GuestProvider>
  );
};
