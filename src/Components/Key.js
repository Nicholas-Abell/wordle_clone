import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyValue, disabled }) => {
    const { board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onEnter, onDelete } = useContext(AppContext);

    const selectLetter = () => {
        if (keyValue === 'Enter') {
            onEnter();
        } else if (keyValue === 'Delete') {
            onDelete();
        } else {
            onSelectLetter(keyValue)
        }
    }
    return (
        <div className={!disabled ? 'line__key' : 'line__key disabled'} onClick={selectLetter}>{keyValue}</div>
    )
}

export default Key;