import { SUPPORT } from '../../helpers';
import { Card } from '../card';

export const SupportListDesktop = () => {
  return (
    <div className="hidden lg:grid grid-cols-[repeat(auto-fill,minmax(250px,330px))] gap-4">
      {SUPPORT.map(item => (
        <Card key={item.title} content={item} />
      ))}
    </div>
  );
};
