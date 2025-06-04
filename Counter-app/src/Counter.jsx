import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const decreaseCount = () => {
        setCount(count-1);
    }
    const resetCount = () => {
        setCount(0);
    }
    const increaseCount = () => {
        setCount(count+1);
    }

    return(
        <div className="counter-container">
            <h2 className="welcome">Welcome to my Counter APP</h2>
            <p className="count">{count}</p>
            <button className="button" onClick={decreaseCount}>Decrease Count</button>
            <button className="button" onClick={resetCount}>Reset Count</button>
            <button className="button" onClick={increaseCount}>Increase Count</button>

        </div>

    );
}

export default Counter;