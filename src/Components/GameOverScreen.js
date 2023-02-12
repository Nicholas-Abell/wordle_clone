import { AppContext } from "../App";
import React, { useContext } from "react";
import './GameOverScreen.scss';

const GameOverScreen = () => {
    const { gameOver, correctWord, currentAttempt, onReset } = useContext(AppContext);

    return (
        <div className="gameOverScreen">
            <div>
                <h2
                    className="gameOverScreen__winLose">
                    {
                        gameOver.gameWon
                            ? <p>You <bold style={{ color: 'green' }}>Win</bold></p>
                            : <p>You <bold style={{ color: 'red' }}>Lose</bold></p>
                    }
                </h2>
                <h3
                    className="gameOverScreen__correctWord">
                    The correct word: {correctWord}
                </h3>
                <h3 className="gameOverScreen__tries">
                    #of tries: {currentAttempt.attempt}
                </h3>
            </div>
            <button
                className="gameOverScreen__button"
                onClick={onReset}>
                Reset
            </button>
        </div>
    )
}

export default GameOverScreen;