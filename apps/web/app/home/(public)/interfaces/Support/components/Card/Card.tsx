import { Icon } from '@coobrastur/ui/components/DataDisplay/Icon';
import { Text } from '@coobrastur/ui/components/DataDisplay/Text';
import { Title } from '@coobrastur/ui/components/DataDisplay/Title';
import { Link } from '@coobrastur/ui/components/DataEntry/Link';
import { ArrowRight } from '@coobrastur/ui/lib/icons';

import { Image } from '@components/Image';

import { Support } from '../../types/support.types';

interface CardProps {
  content: Support;
}

export const Card = ({ content }: CardProps) => {
  return (
    <div className=" bg-white/5 rounded-2xl space-y-2 p-6 hover:bg-white/15 lg:hover:scale-105 lg:transition-all lg:duration-300">
      <div className="w-10 h-10 bg-background rounded-md border-2 border-secondary-100 flex items-center justify-center">
        {typeof content.icon === 'string' ? (
          <Image
            src={content.icon}
            alt={content.title}
            width={40}
            height={40}
          />
        ) : (
          <Icon icon={content.icon} variant="primary" />
        )}
      </div>
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
