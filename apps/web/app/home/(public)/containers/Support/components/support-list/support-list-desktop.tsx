import { Image } from '@components/image';

import { SUPPORT } from '../../helpers';
import { Card } from '../card';

import supportImage from '@images/pages/home/support-image.png';

export const SupportListDesktop = () => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,330px))] gap-4">
        {SUPPORT.map(item => (
          <Card key={item.title} content={item} />
        ))}
      </div>
      <Image
        src={supportImage}
        alt="Imagem chat bot Clara sendo utilizado no celular"
        width={506}
        height={622}
        className="absolute right-0 -bottom-[58px] hidden lg:block"
      />
    </div>
  );
};
