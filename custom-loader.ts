'use client';

import { ImageLoaderProps } from 'next/image';

export function customLoader({ src, width, quality }: ImageLoaderProps) {
  return `${src}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}
