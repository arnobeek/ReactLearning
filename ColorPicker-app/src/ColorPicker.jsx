import { useState } from "react";

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className="main-container">
            <h2>Color Picker</h2>
            <div className="color-container" style={{backgroundColor:color}}>

            </div>
            <label style={{display:'flex', alignItems:'center'}}>
                <p>Select a color: </p> 
                <input type="color" value={color} onChange={handleColorChange} style={{marginLeft:10}}/>
            </label>
            
            
            <h3>Selected color: {color}</h3>
        </div>
    )

}
export default ColorPicker;