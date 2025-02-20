import { Icon, IconProps, Text, Title } from '@workspace/ui/components';
import { ArrowRight } from '@workspace/ui/lib/icons';

import { Link } from '@components/Link';

import { Image } from '@shared/components/Image';

interface CardProps {
  icon: IconProps['icon'] | string;
  title: string;
  description: string;
  href: string;
  target?: string;
}

export const Card = ({ content }: { content: CardProps }) => {
  return (
    <div className="w-[290] bg-white/5 rounded-2xl space-y-2 p-6 hover:bg-white/15 hover:scale-105 transition-all duration-300">
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
          size={14}
          variant="white"
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
};
