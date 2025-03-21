import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';

const Signup = () => {
      const[username,setUsername] = useState('');
      const[password,setPassword] = useState('');
      const[email,setEmail] = useState('');
      const[mobilenumber,setMobilenumber] = useState('');
      const navigate = useNavigate();
      const registerUser = (e) => {
        //bindlogic(frontend+backend)
        axios.post("http://localhost:4000/register/rest/registerStudent",{
            username:username,
            password:password,
            email:email,
            mobilenumber:mobilenumber
        }).then(()=>{
            navigate("/login");
        }).catch((err)=>{
             navigate("/register")
        })
        e.preventDefault();
      }
    return (
        <div>
            <Layout/>
            <center>
                <h2>Please Register with your details!!!</h2>
                <form onSubmit={registerUser} method='post'>
                    <label>Enter UserName:</label>
                    <input type="text" 
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
                    <label>Enter Email:</label>
                    <input type='email' 
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <label>Enter MobileNumber:</label>
                    <input type='number' 
                    name='mobilenumber'
                    value={mobilenumber}
                    onChange={(e)=>setMobilenumber(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <input type='submit' value="Register"/>
                </form>
            </center>
            
        </div>
    );
};

export default Signup;