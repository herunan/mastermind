import React, { useState, useEffect } from 'react';
import { useDailyGame } from './hooks/useDailyGame';
import Board from './components/Board';
import ColorSelector from './components/ColorSelector';
import GameStatusModal from './components/GameStatusModal';
import HowToPlayModal from './components/HowToPlayModal';

function App() {
  const {
    guesses,
    currentGuess,
    gameStatus,
    dailySolution,
    addPeg,
    removePeg,
    submitGuess,
    shareResult,
    isInitialized,
    resetGame
  } = useDailyGame();

  const [showInstructions, setShowInstructions] = useState(false);

  // Show instructions on first visit
  useEffect(() => {
    const hasSeenInstructions = localStorage.getItem('mastermind_instructions_seen');
    if (!hasSeenInstructions) {
      setShowInstructions(true);
      localStorage.setItem('mastermind_instructions_seen', 'true');
    }
  }, []);

  if (!isInitialized) return null;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-purple-500/30 overflow-hidden pb-safe">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pointer-events-none"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-lg mx-auto px-4 py-6 h-screen flex flex-col pb-8">
        <header className="flex justify-between items-center mb-4 flex-none px-2">
          <div className="w-8"></div> {/* Spacer for centering */}
          <div className="text-center">
            <h1 className="text-3xl font-black tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white/60 drop-shadow-sm">
              MASTERMIND
            </h1>
            <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">
              Daily Puzzle
            </p>
          </div>
          <button
            onClick={() => setShowInstructions(true)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/5"
            aria-label="How to play"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </button>
        </header>

        <main className="flex-1 flex flex-col min-h-0 gap-4 relative">
          <Board
            guesses={guesses}
            currentGuess={currentGuess}
            solution={dailySolution}
            gameStatus={gameStatus}
          />

          <div className="flex-none pb-4">
            <ColorSelector
              onAddPeg={addPeg}
              onRemovePeg={removePeg}
              onSubmit={submitGuess}
              currentGuess={currentGuess}
              gameStatus={gameStatus}
            />
          </div>
        </main>
      </div>

      <GameStatusModal
        gameStatus={gameStatus}
        solution={dailySolution}
        onShare={shareResult}
        onReset={resetGame}
      />

      <HowToPlayModal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
      />
    </div>
  );
}

export default App;
