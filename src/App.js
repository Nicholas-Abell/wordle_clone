import './App.css';
import Board from './Components/Board.js';
import KeyBoard from './Components/Keyboard.js';
import React, { useState, createContext } from 'react';
import { boardDefault } from './Components/Words.js';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letterPos: 0 });

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

  const onEnter = () => {
    if (currentAttempt.letterPos > 5) return;
    setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0 });
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onDelete, onEnter }}>
        <Board />
        <KeyBoard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
