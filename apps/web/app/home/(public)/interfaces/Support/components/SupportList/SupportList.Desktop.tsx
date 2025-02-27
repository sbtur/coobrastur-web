import { SUPPORT } from '../../helpers';
import { Card } from '../Card';

export const SupportListDesktop = () => {
  return (
    <div className="flex gap-4">
      {SUPPORT.map(item => (
        <Card key={item.title} content={item} />
      ))}
    </div>
  );
};
