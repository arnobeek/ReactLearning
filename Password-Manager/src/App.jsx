import { useState, useEffect } from "react"
import Axios from "axios";

function App() {
  
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [passwordList, setPasswordList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/showpasswords").then((response)=>{setPasswordList(response.data)});
  },[])

  function handlePasswordChange(event){
    setPassword(event.target.value);
    
  }
  function handleTitleChange(event){
    setTitle(event.target.value);
  }

  function addPassword(){
    Axios.post("http://localhost:3001/addpassword", {password: password, title: title});
  }
  function decryptPassword(encryption){
    Axios.post('http://localhost:3001/decryptpassword', {
      password: encryption.password,
      iv: encryption.iv}).then((response) => {
        setPasswordList(passwordList.map((val) => {
          return val.id == encryption.id ? {
            id: val.id, password:val.password, 
            title: response.data, 
            iv: val.iv
          } : val;
        }))
      })
  }
  
  
  return (
    <div className="app">
      <h2>Password Manager</h2>
      <div className="adding-password">
        <input type="text" placeholder="Ex. password123" onChange={handlePasswordChange}/>
        <input type="text" placeholder="Ex. Facebook" onChange={handleTitleChange}/>
        <button onClick={addPassword}>Add Password</button>
      </div>
      <div className="passwords">
        {passwordList.map((val) => {
          return( 
          <div className="password" onClick={()=>decryptPassword({password: val.password, iv: val.iv, id: val.id})}>
            <h3>{val.title}</h3>            

          </div>)
      })}
      </div>
    </div>
  )
}

export default App
