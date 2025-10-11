import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);
    
    function handleIncrement(){
        setCount(count + incrementBy);
    }
    function handleDecrement(){
        setCount(count - 1);
    }

    function increaseIncrement(){
        setIncrementBy(incrementBy + 1);
    }
    function decreaseIncrementBy(){
        setIncrementBy(incrementBy - 1);
    }

    return(
        <div>
            <h1>Counter value is: {count}</h1> 
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>

            <h1>We increment the count value by: {incrementBy}</h1>
            <button onClick={increaseIncrement}>Increase Increment</button>
            <button onClick={decreaseIncrementBy}>Decrease Increment</button>
        </div>
    )
}