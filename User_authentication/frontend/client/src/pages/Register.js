import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Register() {
    const[form,setForm]=useState({
        name:"",
        email:"",
        password:"",
    });

    const navigate=useNavigate();

    const handleRegister=async()=>{
        try{
            await axios.post(
                "http://localhost:5000/api/auth/register",
                form
            );
            alert("Registration successful! Please login.");
            navigate("/");
        }catch(err){
            alert(err.response?.data || "Registration failed");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Name"
                onChange={(e)=>setForm({...form,name:e.target.value})}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={(e)=>setForm({...form,email:e.target.value})}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>setForm({...form,password:e.target.value})}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;