import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);

    function handleDecreaseCount(){
        setCount(c => c -1);
    }
    function handleResetCount(){
        setCount(0);
    }
    function handleIncreaseCount(){
        setCount(c => c+1);
    }

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'#56DFCF'}}>
            <h2 className="title">Counter App</h2>
            <div>
                <h2 style={{fontSize:90}}>{count}</h2>

            </div>
            <div>
                <button className="button" onClick={handleDecreaseCount}>Decrease Count</button>
                <button className="button" onClick={handleResetCount}>Reset Count</button>
                <button className="button" onClick={handleIncreaseCount}>Increase Count</button>
            </div>

        </div>
    )

}
export default Counter; 