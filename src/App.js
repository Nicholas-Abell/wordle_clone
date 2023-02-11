import './App.css';
import Board from './Components/Board.js';
import KeyBoard from './Components/Keyboard.js';
import React, { useState, createContext } from 'react';
import { boardDefault } from './Components/Words.js';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letterPos: 0 });

  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt }}>
        <Board />
        <KeyBoard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
