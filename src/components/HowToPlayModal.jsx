import React from 'react';
import Peg from './Peg';

const HowToPlayModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="w-full max-w-md bg-gray-900 border border-white/10 rounded-3xl p-6 shadow-2xl transform transition-all scale-100 max-h-[90vh] overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-black text-white tracking-tight">How to Play</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                    <p>
                        Guess the hidden code in 10 tries. The code consists of 4 pegs chosen from 6 colors.
                        Duplicate colors are allowed.
                    </p>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <h3 className="text-white font-bold mb-3 text-base">Feedback Examples</h3>

                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Peg color="#ef4444" size="sm" />
                                    <Peg color="#ef4444" size="sm" />
                                    <Peg color="#3b82f6" size="sm" />
                                    <Peg color="#eab308" size="sm" />
                                </div>
                                <div className="flex items-center gap-3 text-xs">
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                                    </div>
                                    <span>One correct color in the correct position.</span>
                                </div>
                            </div>

                            <div className="w-full h-px bg-white/10"></div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Peg color="#ef4444" size="sm" />
                                    <Peg color="#22c55e" size="sm" />
                                    <Peg color="#3b82f6" size="sm" />
                                    <Peg color="#eab308" size="sm" />
                                </div>
                                <div className="flex items-center gap-3 text-xs">
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded-full bg-white shadow-sm"></div>
                                    </div>
                                    <span>One correct color but in the wrong position.</span>
                                </div>
                            </div>

                            <div className="w-full h-px bg-white/10"></div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Peg color="#ef4444" size="sm" />
                                    <Peg color="#22c55e" size="sm" />
                                    <Peg color="#3b82f6" size="sm" />
                                    <Peg color="#eab308" size="sm" />
                                </div>
                                <div className="flex items-center gap-3 text-xs">
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                                        <div className="w-3 h-3 rounded-full bg-white shadow-sm"></div>
                                    </div>
                                    <span>One correct position and one correct color (wrong position).</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>
                        A new puzzle is released daily at midnight.
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="w-full mt-8 py-3 rounded-xl bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                >
                    Start Game
                </button>
            </div>
        </div>
    );
};

export default HowToPlayModal;
