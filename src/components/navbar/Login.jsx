import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';
import './login.css';

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth] = useAuth()

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

  const submitForm = async (e)=>{
    e.preventDefault();

    console.log( email, password);
    if(isValidate){
           try{
           const res = await axios.post("https://minor-backend-sq9t.onrender.com/login",{
              email: email,
              password: password,
            })
      if(res.data.success){
        toast.success("Login Succesfully");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        })
          localStorage.setItem("auth", JSON.stringify(res.data));
          navigate("/");
      }
     } catch(err){
      toast.error('Something went wrong')
      console.log(err);
     }
  }
  }

 
  return (
    
    <body styles={"background-color: rgba(127, 125, 125, 0.954);"}><>
    <form className ="formbox"action=" " onSubmit={submitForm}>
    <h1 className='text-white'>Login</h1>
    
      
      <input type="email" name="" id="email" placeholder='Username' autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    
    
      
      <input type="password" name="" placeholder='Password' id="password" autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    

    <input type="submit" name="" value="Login"/>
    </form>
    </>
    </body>
    
  )
}

export default Login
