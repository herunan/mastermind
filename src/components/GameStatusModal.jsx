import React, { useState, useRef } from 'react';
import Peg from './Peg';

const GameStatusModal = ({ gameStatus, solution, onShare, onReset }) => {
    const [copied, setCopied] = useState(false);
    const modalClicks = useRef(0);
    const [resetTimeout, setResetTimeout] = useState(null);

    if (gameStatus === 'playing') return null;

    const handleShare = () => {
        onShare();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleModalClick = (e) => {
        // Only count clicks on the modal background, not on buttons
        if (e.target === e.currentTarget) {
            modalClicks.current += 1;

            // Clear existing timeout
            if (resetTimeout) {
                clearTimeout(resetTimeout);
            }

            if (modalClicks.current === 4) {
                if (window.confirm('Reset and play again?')) {
                    onReset();
                }
                modalClicks.current = 0;
            } else {
                // Reset count after 2 seconds of inactivity
                const timeout = setTimeout(() => {
                    modalClicks.current = 0;
                }, 2000);
                setResetTimeout(timeout);
            }
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={handleModalClick}
        >
            <div className="w-full max-w-sm bg-gray-900 border border-white/10 rounded-3xl p-8 shadow-2xl text-center transform transition-all scale-100">
                <h2 className={`text-4xl font-black mb-2 ${gameStatus === 'won' ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600' : 'text-red-500'}`}>
                    {gameStatus === 'won' ? 'YOU WON!' : 'GAME OVER'}
                </h2>

                <p className="text-gray-400 mb-6">
                    {gameStatus === 'won' ? 'You cracked the code!' : 'Better luck tomorrow!'}
                </p>

                <div className="bg-black/30 rounded-xl p-4 mb-6">
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">The Hidden Code</p>
                    <div className="flex justify-center gap-3">
                        {solution.map((color, idx) => (
                            <Peg key={idx} color={color.value} size="md" />
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleShare}
                    className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                    {copied ? (
                        <>
                            <span>Copied!</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </>
                    ) : (
                        <>
                            <span>Share Result</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        </>
                    )}
                </button>

                <div className="mt-4 text-xs text-gray-600">
                    Next puzzle available tomorrow
                </div>
            </div>
        </div>
    );
};

export default GameStatusModal;
