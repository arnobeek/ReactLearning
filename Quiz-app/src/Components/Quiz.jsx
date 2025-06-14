import { useContext, useState } from "react";
import { QuizContext } from "./Helpers/Context";
import { Questions } from "./Helpers/QuestionBank";

function QuizScreen(){
    const {score, setScore, setGameState} = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    function nextQuestion(){
        if(Questions[currQuestion].answer == optionChosen){
            setScore(s=>s + 1)
        }
        alert(score)
        setCurrQuestion(currQuestion+1);
    }
    function finishQuiz(){
        if(Questions[currQuestion].answer == optionChosen){
            setScore(s=>s + 1)
        }
        
        setGameState("endScreen");

    }

    return(
        <div className="quiz">
            <h1>Quiz Screen</h1>
            <h2>{Questions[currQuestion].prompt}</h2>
            <div className="options">
                <button onClick={()=>setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
                <button onClick={()=>setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
                <button onClick={()=>setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
                <button onClick={()=>setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion == Questions.length - 1 ? (<button onClick={finishQuiz}>Finish Quiz</button>) : (<button onClick={nextQuestion}>Next Question</button>)}
            
        </div>
    )

}
export default QuizScreen;