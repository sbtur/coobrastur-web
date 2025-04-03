import { Image } from '@/shared/components/image';

import { Support } from '../../types/support.types';

import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Link } from '@ui/components/data-entry/link';
import { ArrowRight } from '@ui/lib/icons';

interface CardProps {
  content: Support;
}

export const Card = ({ content }: CardProps) => {
  return (
    <div className=" bg-white/5 rounded-2xl space-y-2 p-6 hover:bg-white/15 lg:hover:scale-105 lg:transition-all lg:duration-300">
      <Image
        src={content.icon}
        alt={content.title}
        width={45}
        height={45}
        className="w-[45px] h-[45px] object-cover rounded-[5px]"
      />

      <Title size="xs" variant="white">
        {content.title}
      </Title>
      <Text size="sm" className="text-white">
        {content.description}
      </Text>
      <Link
        href={content.href}
        target={content.target}
        className="group inline-flex items-center gap-2"
        variant="white"
      >
        Saiba mais{' '}
        <Icon
          icon={ArrowRight}
          size="sm"
          variant="white"
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
};
