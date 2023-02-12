import './App.css';
import Board from './Components/Board.js';
import KeyBoard from './Components/Keyboard.js';
import GameOverScreen from './Components/GameOverScreen.js';
import React, { useState, createContext, useEffect } from 'react';
import { boardDefault } from './Components/Words.js';
import { wordBank } from './Components/wordBank.js';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [correctWord, setCorrectWord] = useState([]);
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, gameWon: false });

  useEffect(() => {
    setCorrectWord(wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase());
  }, []);

  useEffect(() => {
    console.log(correctWord)
  }, [correctWord]);

  useEffect(() => {
    console.log(currentAttempt.attempt);
  }, [currentAttempt.attempt]);

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPos > 4) return;
    const boardState = [...board];
    boardState[currentAttempt.attempt][currentAttempt.letterPos] = keyValue;
    setBoard(boardState);
    setCurrentAttempt({ ...currentAttempt, letterPos: currentAttempt.letterPos + 1 });
  }

  const onDelete = () => {
    if (currentAttempt.letterPos === 0) return;
    const boardState = [...board];
    boardState[currentAttempt.attempt][currentAttempt.letterPos - 1] = '';
    setBoard(boardState);
    setCurrentAttempt({ ...currentAttempt, letterPos: currentAttempt.letterPos - 1 })
  }

  const onReset = () => {
    window.location.reload();
  }

  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return;

    let currentWord = '';

    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i]
    }

    setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0 });

    if (currentWord === correctWord) {
      setGameOver({ gameOver: true, gameWon: true });
      return;
    }

    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, gameWon: false });
    }
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onDelete, onReset, onEnter, correctWord, disabledLetters, setDisabledLetters, gameOver, setGameOver }}>
        <Board />
        {gameOver.gameOver ? <GameOverScreen /> : <KeyBoard />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
