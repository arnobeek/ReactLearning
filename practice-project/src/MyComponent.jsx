import React, {useState} from 'react';

function MyComponent(){

    const [name,setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName("Arnold");
        console.log("Name updated to Arnold");
    }

    const updateAge = () => {
        setAge(age + 1);
        console.log(`Age updated to ${age + 1}`);
    }

    const toggleEmploymentStatus = () => {
        setIsEmployed(!isEmployed);
        console.log(`Employment status updated to ${!isEmployed ? "Employed" : "Unemployed"}`);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set NAME</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Increase age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmploymentStatus}>Toggle Employment Status</button>

        </div>
    );

}
export default MyComponent;