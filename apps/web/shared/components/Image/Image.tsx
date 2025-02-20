import ImageNext, { ImageProps } from 'next/image';

export const Image = ({ src, alt, ...props }: ImageProps) => {
  return <ImageNext src={src} alt={alt} {...props} />;
};
