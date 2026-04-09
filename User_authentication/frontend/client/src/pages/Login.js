import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin=async()=>{
        try{
            const res=await axios.post(
                "http://localhost:5000/api/auth/login",
                {email,password}
            );

            sessionStorage.setItem("token",res.data.token);
            navigate("/dashboard");
        }
        catch(err){
            alert(err.response?.data || "Login failed");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;