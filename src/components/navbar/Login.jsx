import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify'
import './login.css';

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const usenavigate =  useNavigate()

  const submitForm = (e)=>{
    e.preventDefault();

    console.log( email, password);
    axios.post("https://minor-backend-sq9t.onrender.com/login",{
      email: email,
      password: password,
    })
    .then(res=>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
    
  }

 
  return (
    
    <body styles={"background-color: rgba(127, 125, 125, 0.954);"}><>
    <form className ="formbox"action=" " onSubmit={submitForm}>
    <h1>Login</h1>
    
      
      <input type="email" name="" id="email" placeholder='Username' autoComplete='none' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    
    
      
      <input type="password" name="" placeholder='Password' id="password" autoComplete='none' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    

    <input type="submit" name="" value="Login"/>
    </form>
    </>
    </body>
    
  )
}

export default Login
