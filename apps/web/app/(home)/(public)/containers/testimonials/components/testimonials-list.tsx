'use client';
import { useState } from 'react';

import { Image } from '@components/image';

import { VIDEOS } from '../helpers/videos';
import { TestimonialsCaroussel } from './testimonials-carousel';

import { Content } from '@ui/components/layouts/content';

export const TestimonialsList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getWidthClass = (index: number) => {
    if (hoveredIndex === null) {
      return index === 0 ? 'md:w-[90%]' : 'md:w-[20%]';
    }

    return hoveredIndex === index ? 'md:w-[90%]' : 'md:w-[20%]';
  };

  return (
    <Content className="px-4 lg:grid lg:grid-cols-[2fr_1fr] md:gap-8 items-center">
      <div className="w-full grid grid-cols-2 md:grid-cols-none md:flex gap-2 mx-auto">
        {VIDEOS.map((video, index) => (
          <div
            className={`${getWidthClass(index)} ${hoveredIndex !== index ? 'before:bg-[url("/images/icons/play.svg")] before:bg-no-repeat before:bg-center before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-10' : ''} w-full h-[170px] first:h-[350px] first:col-span-2 first:md:h-[375px] md:h-[375px] rounded-[20px] overflow-hidden relative transition-all duration-500 ease-in-out cursor-pointer ${index === 0 ? 'col-span-2 first:md:col-span-1' : ''}`}
            key={video.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(index)}
          >
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <TestimonialsCaroussel />
    </Content>
  );
};
