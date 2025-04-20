
import React from 'react';

interface PipeProps {
  height: number;
  position: number;
}

export const Pipe: React.FC<PipeProps> = ({ height, position }) => {
  return (
    <>
      <div
        className="absolute w-[52px] bg-green-500 rounded-t-lg shadow-lg"
        style={{
          height: `${height}px`,
          left: `${position}px`,
          top: 0,
        }}
      />
      <div
        className="absolute w-[52px] bg-green-500 rounded-b-lg shadow-lg"
        style={{
          height: `${500 - height - 150}px`,
          left: `${position}px`,
          bottom: 0,
          top: `${height + 150}px`,
        }}
      />
    </>
  );
};
