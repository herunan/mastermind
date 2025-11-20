import React from 'react';
import Peg from './Peg';
import { checkGuess } from '../utils/gameLogic';

const Row = ({ guess, solution, isCurrent, currentGuess }) => {
    // If it's the current row, show the current guess being built
    // If it's a past row, show the guess
    // If it's an empty future row, show empty slots

    let pegsToRender = [];
    let feedback = { exactMatches: 0, colorMatches: 0 };

    if (isCurrent) {
        pegsToRender = [...currentGuess];
        while (pegsToRender.length < 4) {
            pegsToRender.push(null);
        }
    } else if (guess) {
        pegsToRender = guess;
        feedback = checkGuess(solution, guess);
    } else {
        pegsToRender = [null, null, null, null];
    }

    return (
        <div className={`flex items-center gap-4 p-2 rounded-xl ${isCurrent ? 'bg-white/5 ring-2 ring-white/20' : ''}`}>
            <div className="flex gap-2">
                {pegsToRender.map((color, idx) => (
                    <Peg key={idx} color={color?.value} empty={!color} />
                ))}
            </div>

            {/* Feedback Area */}
            <div className="grid grid-cols-2 gap-1 w-8 h-8">
                {!isCurrent && guess && (
                    <>
                        {[...Array(feedback.exactMatches)].map((_, i) => (
                            <div key={`exact-${i}`} className="w-3 h-3 rounded-full bg-red-500 shadow-sm" title="Correct Position" />
                        ))}
                        {[...Array(feedback.colorMatches)].map((_, i) => (
                            <div key={`color-${i}`} className="w-3 h-3 rounded-full bg-white shadow-sm" title="Correct Color" />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Row;
