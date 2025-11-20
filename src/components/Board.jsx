import React from 'react';
import Row from './Row';

const Board = ({ guesses, currentGuess, solution, gameStatus }) => {
    return (
        <div className="flex flex-col gap-2 w-full max-w-md mx-auto p-4 bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex-1 overflow-y-auto custom-scrollbar">
            {/* Render past guesses */}
            {guesses.map((guess, idx) => (
                <Row key={idx} guess={guess} solution={solution} />
            ))}

            {/* Render current guess row if playing */}
            {gameStatus === 'playing' && (
                <Row isCurrent={true} currentGuess={currentGuess} />
            )}

            {/* Render empty rows to fill up to 10 if needed, or just show history? 
          Design choice: Let's just show history + current + maybe 1 empty to indicate space?
          Actually, standard UI shows all 10 slots. Let's show remaining slots as empty.
      */}
            {[...Array(Math.max(0, 10 - guesses.length - (gameStatus === 'playing' ? 1 : 0)))].map((_, idx) => (
                <Row key={`empty-${idx}`} />
            ))}
        </div>
    );
};

export default Board;
