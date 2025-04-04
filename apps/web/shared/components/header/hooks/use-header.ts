import { useEffect, useState } from 'react';

type UseHeaderProps = {
  light?: boolean;
};

type UseHeaderReturn = {
  isScrolled: boolean;
  isLight?: boolean;
};

export const useHeader = ({
  light = false,
}: UseHeaderProps): UseHeaderReturn => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(light);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      if (light) {
        setIsLight(window.scrollY === 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [light]);

  return { isScrolled, isLight };
};
