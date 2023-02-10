import './App.css';
import Board from './Components/Board.js';
import KeyBoard from './Components/KeyBoard.js';
import React, { useState, createContext } from 'react';
import { boardDefault } from './Components/Words.js';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard }}>
        <h1>Hello</h1>
        <Board />
        <KeyBoard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
