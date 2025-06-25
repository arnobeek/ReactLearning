import React, {useState} from "react"
import Axios from "axios";

function App() {

  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  
  return (
    <div className="main-container">
      <h2>Password Manager</h2>
      <div className="info-container">
        <input type="text" id="password-input" className="password" placeholder="Ex. password1234" onChange={(event) => {setPassword(event.target.value)}}/>
        <input type="text" id="title-input" className="title" placeholder="Ex. Facebook" onChange={(event) => {setTitle(event.target.value)}}/>
        <button onClick={()=>{
          Axios.post("https://localhost:3001/addinfo", {password:password, title:title});
          document.getElementById("password-input").value = "";                    
          document.getElementById("title-input").value = "";                    
        }}>Add Password</button>

      </div>
    </div>
  )
}

export default App
