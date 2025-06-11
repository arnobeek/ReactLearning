import { useState } from "react";

function GroceryListMaker(){

    const [groceries, setGroceries] = useState(["Apples", "Bread", "Bananas"])

    function handleAddGrocery(){
        const newGrocery = document.getElementById("grocery-input").value;
        document.getElementById("grocery-input").value = "";

        setGroceries(g=>([...g, newGrocery]));

    }
    function handleRemoveGrocery(index){
        setGroceries(groceries.filter((_,i) => i!==index))        
    }

    return(
        <div className="main-container">
            <h2 className="title">Grocery List Maker App</h2>
            <div>
                <input type="text" id="grocery-input" placeholder="Enter your grocery here" className="grocery-input"/>
                <button onClick={handleAddGrocery} style={{height:50, margin:5}}>Add Grocery</button>
            </div>
            <h3 className="list-title">Grocery List</h3>
            <ul>
                {groceries.map((grocery, index)=><li key={index} className="grocery" onClick={()=>handleRemoveGrocery(index)}>{grocery}</li>)}
            </ul>
            
        </div>
    )

}
export default GroceryListMaker;