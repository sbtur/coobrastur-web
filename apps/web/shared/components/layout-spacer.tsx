'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
/**
 * LayoutSpacer is a utility component that dynamically adjusts the bottom padding
 * of elements with [data-layout-space] attribute based on the height of elements
 * with [data-layout-measure] attribute.
 *
 * The component:
 * 1. Measures the height of [data-layout-measure] elements
 * 2. Injects CSS to add padding to [data-layout-space] elements
 * 3. Updates dynamically on resize/content changes via ResizeObserver
 */

export const LayoutSpacer = () => {
  const [height, setHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateHeight = () => {
      const element = document.querySelector('[data-layout-measure]');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.height !== height) {
          setHeight(rect.height);
        }
      }
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    const element = document.querySelector('[data-layout-measure]');
    if (element) observer.observe(element);
    window.addEventListener('resize', updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, [mounted, height]);

  if (!mounted) return null;

  return createPortal(
    <style>{`
      [data-layout-space] {
        padding-bottom: ${height}px !important;
      }
    `}</style>,
    document.head,
  );
};
