import { useState } from "react"

export default function MultipleInputForm(){

    const [name, setName] = useState({
        firstName:"",
        lastName:""
    })

    return(
        <div>
            <form>
                <input type="text" onChange={(e)=>setName({...name, firstName:e.target.value})} value={name.firstName}/>
                <input type="text" onChange={(e)=>setName({...name, lastName:e.target.value})} value={name.lastName}/>
            </form>
        </div>
    )
}