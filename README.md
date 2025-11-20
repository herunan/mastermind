# Daily Mastermind 🎯

A beautiful, modern take on the classic Mastermind code-breaking game. Play a new puzzle every day!

🎮 **[Play Now](https://heavenly-sugar.surge.sh)** | 🌟 **[Live Demo](https://heavenly-sugar.surge.sh)**

![Daily Mastermind Game](https://img.shields.io/badge/Game-Mastermind-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### Core Gameplay
- 🎨 **6 Colors, 4 Positions** - Classic Mastermind rules
- 🎯 **10 Attempts** - Crack the code before you run out of guesses
- 📅 **Daily Puzzle** - New challenge every day with date-based seeding
- 🔴 **Smart Feedback** - Red dots for correct position, white for correct color
- 💾 **Auto-Save** - Your progress is saved automatically
- 📤 **Share Results** - Copy your game results as emoji grid

### Premium UX
- 🌙 **Dark Theme** - Beautiful glassmorphism design
- ✨ **Smooth Animations** - Polished micro-interactions
- 📱 **Fully Responsive** - Perfect on mobile and desktop
- ❓ **How to Play** - Interactive tutorial with examples
- 🔄 **Secret Reset** - Tap modal background 4 times to replay

## 🚀 Quick Start

### Play Online
Visit **[heavenly-sugar.surge.sh](https://heavenly-sugar.surge.sh)** to play instantly!

### Run Locally

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/mastermind.git
cd mastermind

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎮 How to Play

1. **Select 4 colors** from the palette to make your guess
2. **Submit** your guess
3. **Check feedback**:
   - 🔴 Red dot = Correct color in correct position
   - ⚪ White dot = Correct color in wrong position
4. **Keep guessing** until you crack the code or run out of attempts!
5. **Share your results** with friends

## 🛠️ Tech Stack

- **Framework**: React 18.3 with Hooks
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS v4
- **State Management**: React Hooks + localStorage
- **Deployment**: Surge.sh

## 📁 Project Structure

```
mastermind/
├── src/
│   ├── components/
│   │   ├── Board.jsx           # Game grid
│   │   ├── Row.jsx              # Single guess row
│   │   ├── Peg.jsx              # Color peg component
│   │   ├── ColorSelector.jsx   # Color input interface
│   │   ├── GameStatusModal.jsx # Win/Loss modal
│   │   └── HowToPlayModal.jsx  # Tutorial modal
│   ├── hooks/
│   │   └── useDailyGame.js     # Game state management
│   ├── utils/
│   │   └── gameLogic.js        # Core game logic
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point
├── public/                      # Static assets
└── dist/                        # Production build
```

## 🎨 Key Features Explained

### Daily Code Generation
Uses a seeded random number generator based on the current date, ensuring everyone gets the same puzzle each day:

```javascript
const generateDailyCode = () => {
  const today = new Date();
  const seed = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;
  // ... seeded random logic
};
```

### Local Storage Persistence
Game state is automatically saved and restored:
- Current guesses
- Game status (playing/won/lost)
- Tied to the current date

### Share Functionality
Results are formatted as emoji grid for easy sharing:
```
Daily Mastermind 11/19/2025
6/10

🔴🔴⚪
🔴🔴🔴
🔴🔴🔴🔴
```

## 🚢 Deployment

### Deploy to Surge

```bash
# Build the project
npm run build

# Deploy to Surge
npx surge ./dist your-subdomain.surge.sh
```

### Deploy to Vercel/Netlify
The project is ready for deployment on any static hosting platform. Just build and deploy the `dist` folder.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests

## 📄 License

MIT License - feel free to use this project for learning or personal use.

## 🎯 Future Enhancements

- [ ] Statistics tracking (win rate, streak)
- [ ] Difficulty levels (more colors, positions)
- [ ] Multiplayer mode
- [ ] Leaderboard
- [ ] Custom color schemes
- [ ] Sound effects

---

**Built with ❤️ using React and Tailwind CSS**

[Live Demo](https://heavenly-sugar.surge.sh) • [Report Bug](https://github.com/YOUR_USERNAME/mastermind/issues) • [Request Feature](https://github.com/YOUR_USERNAME/mastermind/issues)
