import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import {toast} from 'react-toastify'
import './login.css';

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate =  useNavigate()

  const isValidate = () =>{
    let isproceed= true
    let errormessage = 'Please enter the value in'
    if(email===null || email === ''){
      isproceed = false
      errormessage += 'Username'
    } 
    if(email===null || email === ''){
      isproceed = false
      errormessage += 'Username'
    }
    if(!isproceed){
      alert(errormessage)
    }
    return isproceed
  }

  const submitForm = (e)=>{
    e.preventDefault();

    console.log( email, password);
    if(isValidate){
    axios.post("https://minor-backend-sq9t.onrender.com/login",{
      email: email,
      password: password,
    })
    .then(res=>{
      console.log(res.data)
      alert("Login successfully")
      localStorage.setItem('token',res.data.token)
      navigate('/')
    }).catch(err=>{
      console.log(err)
      alert("Failed :"+err.message)
    })
  }
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
