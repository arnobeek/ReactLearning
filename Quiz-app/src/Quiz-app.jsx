import { useState } from "react";
import MainMenu from "./Components/MainMenu";
import QuizScreen from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Components/Helpers/Context";

function Quiz(){

    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);
    
    return(
        <div className="quiz-app">
            <h2>Quiz App</h2>
            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
                {gameState === "menu" && <MainMenu />}
                {gameState === "quiz" && <QuizScreen />}
                {gameState === "endScreen" && <EndScreen />}
            </QuizContext.Provider>

            
        </div>
    )

}
export default Quiz;