import { useContext, useState } from "react";
import { QuizContext } from "./Helpers/Context";
import { Questions } from "./Helpers/QuestionBank";

function EndScreen(){
    const {score, setScore, setGameState} = useContext(QuizContext);

    function restartQuiz(){
        setScore(0);
        setGameState("quiz")
    }
    return(
        <div className="endScreen">
            <h1>Quiz Finished</h1>
            <h3>{score} / {Questions.length}</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )

}
export default EndScreen;