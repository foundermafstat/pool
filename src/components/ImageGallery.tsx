'use client';

import { useEffect, useState } from 'react';

type Props = { category?: string };

export default function ImageGallery({ category }: Props) {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    // Placeholder: simulate loading images
    setTimeout(() => {
      setImages(Array.from({ length: 9 }).map((_, i) => `/placeholder-${category || 'all'}-${i + 1}.jpg`));
    }, 300);
  }, [category]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src) => (
        <div key={src} className="aspect-video bg-neutral-100 rounded border flex items-center justify-center text-xs text-neutral-500">
          {src}
        </div>
      ))}
    </div>
  );
}
