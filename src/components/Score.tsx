
import React from 'react';

interface ScoreProps {
  score: number;
}

export const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-white shadow-text">
      {score}
    </div>
  );
};
