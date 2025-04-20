
import React from 'react';

interface BirdProps {
  position: number;
}

export const Bird: React.FC<BirdProps> = ({ position }) => {
  return (
    <div
      className="absolute left-5 w-10 h-10 bg-yellow-400 rounded-full shadow-lg transform transition-transform"
      style={{
        top: `${position}px`,
        transform: `rotate(${Math.min(position / 5, 45)}deg)`,
      }}
    >
      <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full" />
      <div className="absolute w-4 h-2 bg-orange-500 right-0 top-4 rounded-r-lg" />
    </div>
  );
};
