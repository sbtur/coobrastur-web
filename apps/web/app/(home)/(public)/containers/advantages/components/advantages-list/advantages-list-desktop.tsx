import { Image } from '@components/image';

import { Card } from '../../components/card';
import { ADVANTAGES } from '../../helpers';

import advantageImage from '@images/pages/home/advantages-featured.png';

export const AdvantagesListDesktop = () => {
  const [advantage1, advantage2, advantage3, advantage4] = ADVANTAGES;

  if (!advantage1 || !advantage2 || !advantage3 || !advantage4) {
    return [];
  }

  return (
    <div className="w-fit hidden lg:grid grid-cols-[minmax(290px,400px)_minmax(350px,900px)_minmax(290px,400px)] gap-4 2xl:gap-8 mx-auto">
      <div className="space-y-4">
        <Card advantage={advantage1} />
        <Card advantage={advantage2} />
      </div>
      <div className="relative rounded-2xl overflow-hidden bg-neutral-200">
        <Image
          src={advantageImage}
          alt="Hotel"
          width={610}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="space-y-4">
        <Card advantage={advantage3} />
        <Card advantage={advantage4} />
      </div>
    </div>
  );
};
