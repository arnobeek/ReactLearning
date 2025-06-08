import { useState } from "react";

function GroceryListMaker(){

    const [groceries, setGroceries] = useState(["Apples", "Bread", "Bananas"]);

    function handleAddGrocery(){

        const newGrocery = document.getElementById("grocery-input").value;
        document.getElementById("grocery-input").value = "";

        setGroceries([...groceries, newGrocery])

    }
    function handleRemoveGrocery(index){
        setGroceries(groceries.filter((_,i) => i !== index))

    }

    return(
        <div style={{backgroundColor:'#56DFCF', height:'700px', display:'flex', flexDirection:'column', alignItems:'center', padding:0, margin:0}}>
            <h2 style={{fontSize:50}}>Grocery List Maker</h2>
            <div>
                <input type="
            text" id="grocery-input" placeholder="Enter your grocery" size={40} style={{height:'50px',}}/>
            <button onClick={handleAddGrocery} style={{height:'50px', margin:'5px'}}>Add Grocery</button>
            </div>
            <h3 style={{fontSize:30}}>Grocery List</h3>
            <ul>
                {groceries.map((grocery, index) => <li key={index} onClick={()=>handleRemoveGrocery(index)} className="grocery">{grocery}</li>)}
            </ul>
        </div>
    )

}
export default GroceryListMaker;