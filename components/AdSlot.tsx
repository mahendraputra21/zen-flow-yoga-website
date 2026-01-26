import React from 'react';
import { AdFormat, AdPosition, AdSlotProps } from '../types';

const AdSlot: React.FC<AdSlotProps> = ({ position, format = AdFormat.AUTO, className = '' }) => {
  // Map formats to approximate dimensions for the placeholder visualization
  const getDimensions = () => {
    switch (format) {
      case AdFormat.RECTANGLE:
        return 'h-64 w-full max-w-[300px]';
      case AdFormat.SKYSCRAPER:
        return 'h-[600px] w-[160px] or w-[300px]';
      case AdFormat.BANNER:
        return 'h-24 w-full';
      case AdFormat.AUTO:
      default:
        return 'h-32 w-full';
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center my-6 ${className}`}>
      <span className="text-xs text-slate-400 mb-1 uppercase tracking-widest">Advertisement</span>
      <div 
        className={`bg-slate-200 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 font-medium ${getDimensions()} w-full`}
      >
        <div className="text-center p-4">
          <p>Google AdSense Slot</p>
          <p className="text-xs opacity-70">Pos: {position} | Fmt: {format}</p>
        </div>
      </div>
    </div>
  );
};

export default AdSlot;
