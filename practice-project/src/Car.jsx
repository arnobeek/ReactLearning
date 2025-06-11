import { useState } from "react";

function Car(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] =useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {
            year: carYear, 
            make : carMake, 
            model : carModel
        }
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

        setCars(c =>([...c, newCar]))
    }
    function handleRemoveCar(index){
        
        setCars(c=>c.filter((_,i)=>i!==index))

    }
    function handleChangeCarYear(event){
        setCarYear(event.target.value);
    }
    function handleChangeCarMake(event){
        setCarMake(event.target.value);
    }
    function handleChangeCarModel(event){
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>
                List of Car Objects
            </h2>
            <ul>
                {cars.map((car, index)=><li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}

            </ul>
            <input type="number" value={carYear} onChange={handleChangeCarYear}/><br/>
            <input type="text" value={carMake} onChange={handleChangeCarMake} placeholder="Enter car Make"/><br/>
            <input type="text" value={carModel} onChange={handleChangeCarModel} placeholder="Enter car Model"/><br/>
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    )
}

export default Car;