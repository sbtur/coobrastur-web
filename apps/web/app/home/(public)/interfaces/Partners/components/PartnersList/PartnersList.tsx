import { Container } from '@workspace/ui/components';

import { Image } from '@components/Image';

import { PARTNERS } from '../../helpers';

export const PartnersList = () => {
  return (
    <Container className="flex gap-2">
      {PARTNERS.map(partner => (
        <div
          className="w-32 h-32 bg-background border rounded-2xl flex items-center justify-center shadow-md shadow-black/5 hover:shadow-lg transition-all duration-300"
          key={partner.name}
        >
          <picture className="w-24 h-24 rounded-2xl object-cover">
            <Image
              src={partner.image}
              alt={partner.name}
              width={115}
              height={115}
            />
          </picture>
        </div>
      ))}
    </Container>
  );
};
