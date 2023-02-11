import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyValue }) => {
    const { board, setBoard, currentAttempt, setCurrentAttempt } = useContext(AppContext);

    const selectLetter = () => {
        if (keyValue === 'Enter') {
            if (currentAttempt.letterPos > 5) return;
            setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0 });
        } else if (keyValue === 'Delete') {
            if (currentAttempt.letterPos === 0) return;
            const boardState = [...board];
            boardState[currentAttempt.attempt][currentAttempt.letterPos - 1] = '';
            setBoard(boardState);
            setCurrentAttempt({ ...currentAttempt, letterPos: currentAttempt.letterPos - 1 })
        } else {
            if (currentAttempt.letterPos > 4) return;
            const boardState = [...board];
            boardState[currentAttempt.attempt][currentAttempt.letterPos] = keyValue;
            setBoard(boardState);
            setCurrentAttempt({ ...currentAttempt, letterPos: currentAttempt.letterPos + 1 });
        }

    }
    return (
        <div className="line__key" onClick={selectLetter}>{keyValue}</div>
    )
}

export default Key;