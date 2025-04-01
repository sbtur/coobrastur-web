import React from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  renderComponent?: (props: ImageProps) => React.ReactElement;
}

export const Image = ({
  src,
  alt,
  className,
  renderComponent,
  ...props
}: ImageProps) => {
  const imageProps = {
    src,
    alt,
    className,
    ...props,
  };

  if (renderComponent) {
    return renderComponent(imageProps);
  }

  return <img {...imageProps} />;
};
