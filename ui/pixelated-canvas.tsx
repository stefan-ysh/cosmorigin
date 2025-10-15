'use client';

import { memo } from 'react';

interface PixelatedCanvasProps {
  placeholder?: boolean;
}

const PixelatedCanvas = ({ placeholder = true }: PixelatedCanvasProps) => (
  <div className="flex h-[200px] w-full items-center justify-center rounded-xl border border-dashed border-white/30 bg-black/20 text-sm text-white/60">
    {placeholder ? 'PixelatedCanvas component is under construction.' : null}
  </div>
);

export default memo(PixelatedCanvas);
