import './App.css';
import Board from './Components/Board.js';
import KeyBoard from './Components/KeyBoard.js';
import React, { useState } from 'react';
import { boardDefault } from './Components/Words.js';

function App() {

  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="App">
      <Board />
      <KeyBoard />
    </div>
  );
}

export default App;
