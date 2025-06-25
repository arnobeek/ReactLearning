import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register(){

    const [inputs, setInputs] = useState({
        username:'',
        email:'',
        password:''
    })
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    function handleInputChange(event){
        setInputs(prev=>({...prev, [event.target.name]: event.target.value}))

    }
    async function handleSubmit(event){
        event.preventDefault()
        
        try{
            await axios.post("http://localhost:8800/api/auth/register", inputs)
            navigate('/login');
        }
        catch(err){
            setError(err.response.data);
        }

    }
    console.log(inputs)

    return(
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder="username" name="username" onChange={handleInputChange} />
                <input required type="email" placeholder="email" name="email" onChange={handleInputChange}/>
                <input required type="password" placeholder="password" name="password" onChange={handleInputChange} />
                <button onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>}
                <span>Do you have an account? <Link to='/login'>Login</Link></span>

            </form>

        </div>
    )

}
export default Register;