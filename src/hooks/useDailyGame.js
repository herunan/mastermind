import { useState, useEffect } from 'react';
import { generateDailyCode, checkGuess, formatShareResult } from '../utils/gameLogic';

const STORAGE_KEY = 'daily_mastermind_state';

export const useDailyGame = () => {
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState([]);
    const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
    const [dailySolution, setDailySolution] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const solution = generateDailyCode();
        setDailySolution(solution);

        // Load state from local storage
        const savedState = localStorage.getItem(STORAGE_KEY);
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            const today = new Date().toDateString();

            // Check if the saved state is for today
            if (parsedState.date === today) {
                setGuesses(parsedState.guesses);
                setGameStatus(parsedState.gameStatus);
            } else {
                // New day, reset state
                localStorage.removeItem(STORAGE_KEY);
            }
        }
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (!isInitialized) return;

        const stateToSave = {
            date: new Date().toDateString(),
            guesses,
            gameStatus
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }, [guesses, gameStatus, isInitialized]);

    const addPeg = (color) => {
        if (gameStatus !== 'playing' || currentGuess.length >= 4) return;
        setCurrentGuess([...currentGuess, color]);
    };

    const removePeg = () => {
        if (gameStatus !== 'playing' || currentGuess.length === 0) return;
        setCurrentGuess(currentGuess.slice(0, -1));
    };

    const submitGuess = () => {
        if (currentGuess.length !== 4 || gameStatus !== 'playing') return;

        const newGuesses = [...guesses, currentGuess];
        setGuesses(newGuesses);

        const { exactMatches } = checkGuess(dailySolution, currentGuess);

        if (exactMatches === 4) {
            setGameStatus('won');
        } else if (newGuesses.length >= 10) {
            setGameStatus('lost');
        }

        setCurrentGuess([]);
    };

    const shareResult = () => {
        const result = formatShareResult(gameStatus === 'won', guesses.length, guesses, dailySolution);
        navigator.clipboard.writeText(result);
        return result;
    };

    const resetGame = () => {
        localStorage.removeItem(STORAGE_KEY);
        setGuesses([]);
        setCurrentGuess([]);
        setGameStatus('playing');
        const solution = generateDailyCode();
        setDailySolution(solution);
    };

    return {
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
    };
};
