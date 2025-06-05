import {useState} from "react";

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF")

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <>
        <div>
            <h1>Color Picker</h1>
            <div className="color-container" style={{backgroundColor: color}}>

            </div>
            <label>
                <p>Select a color: </p>
                <input type="color" value={color} onChange={handleColorChange}></input>
            </label>
            <p>Selected color: {color}</p>
        </div>
        </>
    )
}
export default ColorPicker;