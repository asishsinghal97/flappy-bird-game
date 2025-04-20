
import React, { useEffect, useState, useRef } from 'react';
import { Bird } from './Bird';
import { Pipe } from './Pipe';
import { Score } from './Score';
import { GameOver } from './GameOver';

export const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [birdPosition, setBirdPosition] = useState(250);
  const [pipeHeight, setPipeHeight] = useState(200);
  const [pipePosition, setPipePosition] = useState(400);
  
  const gravity = 3;
  const jumpHeight = 50;
  const gameSpeed = 4;
  const pipeWidth = 52;
  const birdSize = 40;
  const gameAreaHeight = 500;
  
  const gameLoopRef = useRef<number>();
  
  const jump = () => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    if (!gameOver) {
      setBirdPosition((prev) => Math.max(0, prev - jumpHeight));
    }
  };

  const checkCollision = () => {
    const birdTop = birdPosition;
    const birdBottom = birdPosition + birdSize;
    const pipeTop = pipeHeight - 150;
    const pipeBottom = pipeHeight + 150;

    if (
      pipePosition < birdSize + 20 &&
      pipePosition + pipeWidth > 20 &&
      (birdTop < pipeTop || birdBottom > pipeBottom)
    ) {
      return true;
    }

    if (birdBottom >= gameAreaHeight) {
      return true;
    }

    return false;
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setBirdPosition(250);
    setPipePosition(400);
    setPipeHeight(200);
  };

  useEffect(() => {
    if (gameStarted && !gameOver) {
      gameLoopRef.current = requestAnimationFrame(function gameLoop() {
        setBirdPosition((prev) => {
          const newPosition = prev + gravity;
          if (newPosition > gameAreaHeight - birdSize) {
            setGameOver(true);
            return gameAreaHeight - birdSize;
          }
          return newPosition;
        });

        setPipePosition((prev) => {
          if (prev <= -pipeWidth) {
            setScore((s) => s + 1);
            setPipeHeight(Math.random() * (gameAreaHeight - 300) + 150);
            return 400;
          }
          return prev - gameSpeed;
        });

        if (checkCollision()) {
          setGameOver(true);
          return;
        }

        gameLoopRef.current = requestAnimationFrame(gameLoop);
      });
    }

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameStarted, gameOver]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-purple-200">
      <div 
        className="relative w-[400px] h-[500px] bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg overflow-hidden shadow-xl cursor-pointer"
        onClick={jump}
      >
        <Bird position={birdPosition} />
        <Pipe height={pipeHeight} position={pipePosition} />
        <Score score={score} />
        {gameOver && <GameOver score={score} onRestart={resetGame} />}
        {!gameStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-2xl font-bold">
            Tap to Start
          </div>
        )}
      </div>
    </div>
  );
};
