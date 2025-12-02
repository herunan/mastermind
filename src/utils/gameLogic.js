export const COLORS = [
    { name: 'Red', value: '#ef4444', id: 'red' },
    { name: 'Green', value: '#22c55e', id: 'green' },
    { name: 'Blue', value: '#3b82f6', id: 'blue' },
    { name: 'Yellow', value: '#eab308', id: 'yellow' },
    { name: 'Purple', value: '#a855f7', id: 'purple' },
    { name: 'Orange', value: '#f97316', id: 'orange' },
];

// Simple Linear Congruential Generator for seeded random numbers
const mulberry32 = (a) => {
    return function () {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

export const generateDailyCode = () => {
    const today = new Date();
    const seedStr = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;
    const seed = parseInt(seedStr, 10);
    const random = mulberry32(seed);

    const code = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(random() * COLORS.length);
        code.push(COLORS[randomIndex]);
    }
    return code;
};

export const checkGuess = (code, guess) => {
    let exactMatches = 0;
    let colorMatches = 0;

    const codeIds = code.map(c => c.id);
    const guessIds = guess.map(c => c.id);

    const codeFreq = {};
    const guessFreq = {};

    // First pass: count exact matches
    for (let i = 0; i < 4; i++) {
        if (codeIds[i] === guessIds[i]) {
            exactMatches++;
        } else {
            codeFreq[codeIds[i]] = (codeFreq[codeIds[i]] || 0) + 1;
            guessFreq[guessIds[i]] = (guessFreq[guessIds[i]] || 0) + 1;
        }
    }

    // Second pass: count color matches
    for (const color in guessFreq) {
        if (codeFreq[color]) {
            colorMatches += Math.min(guessFreq[color], codeFreq[color]);
        }
    }

    return { exactMatches, colorMatches };
};

export const formatShareResult = (won, guessCount, guesses, solution) => {
    const today = new Date();
    const dateStr = today.toLocaleDateString();
    const title = `Daily Mastermind ${dateStr}`;
    const score = won ? `${guessCount}/10` : 'X/10';

    let grid = '';
    guesses.forEach(guess => {
        const { exactMatches, colorMatches } = checkGuess(solution, guess);
        let row = '';
        for (let i = 0; i < exactMatches; i++) row += '🔴';
        for (let i = 0; i < colorMatches; i++) row += '⚪';
        grid += row + '\n';
    });

    const url = typeof window !== 'undefined' && window.SHARE_URL ? `\n${window.SHARE_URL}` : '';
    return `${title}\n${score}\n\n${grid}${url}`;
};
