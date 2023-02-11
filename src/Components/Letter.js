import React, { useContext } from "react";
import { AppContext } from '../App.js';
import './Letter.scss';

function Letter({ letterPos, attemptVal }) {
    const { board, correctWord, currentAttempt } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = correctWord[letterPos] === letter;
    const almost = !correct && letter !== '' && correctWord.includes(letter);

    const letterState = currentAttempt.attempt > attemptVal
        && (correct ? "letter--correct" : almost ? "letter--close" : "letter--wrong");
    return <div className={`letter ${letterState}`}>{letter}</div>;
}

export default Letter;