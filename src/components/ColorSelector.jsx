import React from 'react';
import { COLORS } from '../utils/gameLogic';
import Peg from './Peg';

const ColorSelector = ({ onAddPeg, onRemovePeg, onSubmit, currentGuess, gameStatus }) => {
    const isFull = currentGuess.length === 4;
    const canSubmit = isFull && gameStatus === 'playing';

    return (
        <div className="w-full max-w-md mx-auto mt-4 p-4 bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex justify-center gap-3 mb-4">
                {COLORS.map((color) => (
                    <button
                        key={color.id}
                        onClick={() => onAddPeg(color)}
                        disabled={isFull || gameStatus !== 'playing'}
                        className="transition-transform active:scale-90 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
                    >
                        <Peg color={color.value} size="lg" />
                    </button>
                ))}
            </div>

            <div className="flex gap-4">
                <button
                    onClick={onRemovePeg}
                    disabled={currentGuess.length === 0 || gameStatus !== 'playing'}
                    className="flex-1 py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Delete
                </button>
                <button
                    onClick={onSubmit}
                    disabled={!canSubmit}
                    className={`flex-1 py-3 px-6 rounded-xl font-bold uppercase tracking-wider transition-all shadow-lg
            ${canSubmit
                            ? 'bg-gradient-to-r from-green-400 to-emerald-600 text-white hover:shadow-green-500/30 hover:-translate-y-0.5'
                            : 'bg-white/5 text-white/30 cursor-not-allowed'
                        }`}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ColorSelector;
