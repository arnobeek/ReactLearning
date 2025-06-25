import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login(){

    const [inputs, setInputs] = useState({
        username:'',
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
            await axios.post("http://localhost:8800/api/auth/login", inputs)
            navigate('/');
        }
        catch(err){
            setError(err.response.data);
        }

    }
    console.log(inputs)

    return(
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username" name="username" onChange={handleInputChange} />
                <input type="password" placeholder="password" name="password" onChange={handleInputChange} />
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Don't have an account? <Link to='/register'>Register</Link></span>

            </form>

        </div>
    )

}
export default Login;