import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';
const Login = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        axios.post("http://localhost:4000/login/rest/loginStudent",{
            username:username,
            password:password
        }).then((result)=>{
            if(result)
            {
            navigate("/courses");
            }
        }).catch(()=>{
            navigate("/login");
        })
        e.preventDefault();
    }
    return (
        <div>
            <Layout/>
          <center>
            <h2>Welcome to Diet!!!</h2>
            <br></br>
            <form onSubmit={handleLogin} method='post'>
                <label>Enter UserName:</label>
                <input type='text' 
                name='username'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
                <br></br>
                <br></br>
                <label>Enter Password:</label>
                <input type='password' 
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <br></br>
                <br></br>
                <input type='submit' value="Login"/>            
                </form>
          </center>
        </div>
    );
};

export default Login;