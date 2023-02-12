import { AppContext } from "../App";
import React, { useContext } from "react";

const GameOverScreen = () => {
    const { gameOver, correctWord, currentAttempt } = useContext(AppContext);

    return (
        <div className="gameOverScreen">
            <h2>{gameOver.gameWon ? 'You Win' : 'You Lose'}</h2>
            <h3>The correct word: {correctWord}</h3>
            <h2>#of tries: {currentAttempt.attempt}</h2>
        </div>
    )
}

export default GameOverScreen;