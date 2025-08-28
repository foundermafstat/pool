'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = { beforeImage: string; afterImage: string; alt: string };

export default function BeforeAfterSlider({ beforeImage, afterImage, alt }: Props) {
  const [sliderPosition, setSliderPosition] = useState(50);
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded border before-after-container">
      <Image src={beforeImage} alt={`Before: ${alt}`} fill priority quality={90} />
      <div
        className="after-image absolute inset-0"
        style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        <Image src={afterImage} alt={`After: ${alt}`} fill quality={90} />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="slider absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2"
      />
    </div>
  );
}
